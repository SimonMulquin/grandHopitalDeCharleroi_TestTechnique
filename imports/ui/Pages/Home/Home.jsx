import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Composants stylisés
import homeComponents from './styled.jsx';
//Nécéssaire pour formatter la date de naissance
import moment from 'moment';

const { Page } = homeComponents;

const Home = (props) => (
  <Page>
    {(props.data.loading || props.data.error) ? <span>Chargement ...</span> : (
      <ul>
        {props.data.patientsDatas.map((patient, index)=>(
          <li key={index}>
            <div><strong>{`${patient.admin.prenom} ${patient.admin.nom}`}</strong></div>
            <div><span>Date de naissance:</span><span>{moment(patient.admin.date_de_naissance).format('DD-MM-YYYY')}</span></div>
            <div><span>Genre:</span><span>{patient.admin.Genre}</span></div>
            <div><strong>Biométrie</strong></div>
            {console.log(patient)}
          </li>
        ))}
      </ul>
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
