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
//Nécéssaire pour calculler l'age
import moment from 'moment';
//calcul du BMI/IMC
import imc from '/imports/ui/DataVisualization/utils/imc.js';

const { Page, Container, List } = homeComponents;

//Page d'application, affiche les données selon les paramêtres de l'application dans redux
const Home = (props) => (
  <Page>
    {(props.data.loading || props.data.error) ? <span>Chargement ...</span> : (
      <Container>
        <List>
          {props.data.patientsDatas.map((patient, index)=>(
            <PatientDataTable patient={patient} number={index} key={index} />
          ))}
          <Graph toEval={{
            title: 'Age', order: '10', unit: ' Années'
          }} items={props.data.patientsDatas.map((patient, index)=>({value: moment(patient.admin.date_de_naissance, "YYYYMMDD").fromNow().split(" ")[0], id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'BMI/IMC', order: '5', unit: ' '
          }} items={props.data.patientsDatas.map((patient, index)=>({value: imc(patient.biometrie.poids, patient.biometrie.taille), id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'HbA1c', order: '0.02', unit: ' '
          }} items={props.data.patientsDatas.map((patient, index)=>({value: patient.const_biologique.HbA1c, id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'Cholesterol total', order: '40', unit: 'mg/dl'
          }} items={props.data.patientsDatas.map((patient, index)=>({value: patient.const_biologique.Cholesterol_total, id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'Cholesterol HDL', order: '10', unit: 'mg/dl'
          }} items={props.data.patientsDatas.map((patient, index)=>({value: patient.const_biologique.Cholesterol_HDL, id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'PSS', order: '20', unit: 'mmHg'
          }} items={props.data.patientsDatas.map((patient, index)=>({value: patient.parametres.PSS, id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
          <Graph toEval={{
            title: 'Conso. tabagique', order: '10', unit: 'paquets/année'
          }} items={props.data.patientsDatas.map((patient, index)=>({value: patient.assuetudes.Consommation_tabagique, id: patient.id, name: `${patient.admin.prenom} ${patient.admin.nom}`}))}/>
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
