import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Composants stylisés
import homeComponents from './styled.js';

// composant affichant l'ensemble des données du patient dans un tableau
import PatientDataTable from '/imports/ui/DataVisualization/PatientDataTable/PatientDataTable.jsx';
// composant montant les graphiques à barettes.
import Graph from '/imports/ui/DataVisualization/Graph/Graph.jsx';

const { Page, Container, List } = homeComponents;

const Home = (props) => (
  <Page>
    {(props.data.loading || props.data.error) ? <span>Chargement ...</span> : (
      <Container>
        <List>
          {props.data.patientsDatas.map((patient, index)=>(
            <PatientDataTable patient={patient} number={index} key={index} />
          ))}
        </List>
        <List>
          <Graph toEval={{
            title: 'Cholesterol total', order: '40', unit: 'mg/dl'
          }} patientsValues={props.data.patientsDatas.map((patient, index)=>( patient.const_biologique.Cholesterol_total ))}/>
          <Graph toEval={{
            title: 'Cholesterol HDL', order: '10', unit: 'mg/dl'
          }}  patientsValues={props.data.patientsDatas.map((patient, index)=>( patient.const_biologique.Cholesterol_HDL ))}/>
        </List>
      </Container>
    )}
  </Page>
);

//Requête graphql => Séléctionne les données à envoyer dans data, prend un argument devant être un array contenant strictement des valeurs de type int.
const queryPatientsDatas = gql`
  query patientsDatasQuery($targetedPatientsIds: [Int!]) {
    patientsDatas(targetedPatientsIds: $targetedPatientsIds) {
      id
      admin {
        prenom
        nom
        date_de_naissance
        Genre
      }
      biometrie {
        poids
        taille
      }
      const_biologique {
        HbA1c
        Cholesterol_total
        Cholesterol_HDL
      }
      parametres {
        PSS
      }
      assuetudes {
        Consommation_tabagique
      }
    }
  }
`;

/*Construit le composant Home en lui envoyant data en props.
Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.
ownProps contient les props recues du connect et variables contient les paramètres de la requête*/
const HomeWithData = graphql(queryPatientsDatas, {
  options: (ownProps) => { return {
    variables: {
      targetedPatientsIds: ownProps.targetedPatientsIds
    }
  }
}})(Home)

//Donne accès au store redux et aux actions à HomeWithData
const mapStateToProps = store => ({
  targetedPatientsIds: store.targetedPatientsIds
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeWithData);
