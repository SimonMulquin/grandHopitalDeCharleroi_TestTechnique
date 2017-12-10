import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Composants stylisés
import homeComponents from './styled.jsx';

const { Page } = homeComponents;

const Home = (props) => (
  <Page>
    <ul>
      {(props.data.loading || props.data.error) ? null : props.data.patientsDatas.map((patient, index)=>(
        <li>{patient.admin.prenom} {patient.id}</li>
      ))}
    </ul>
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
        dateDeNaissance
        Genre
      }
      biometrie {
        poids
        taille
      }
      constBiologique {
        HbA1c
        cholesterolTotal
        cholesterolHDL
      }
      parametres {
        PSS
      }
      assuetudes {
        consommationTabagique
      }
    }
  }
`;

/*Construit le composant Home en lui envoyant data en props.
Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.
ownProps contient les props recues du connect et variables contient les paramètres de la query*/
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
