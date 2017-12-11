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

const { Page, List, Listed, Row, Name, Cat, Cell } = homeComponents;

const Home = (props) => (
  <Page>
    {(props.data.loading || props.data.error) ? <span>Chargement ...</span> : (
      <List>
        {props.data.patientsDatas.map((patient, index)=>(
          <Listed number={index} key={index}>
            <Name>{`${patient.admin.prenom} ${patient.admin.nom}`}</Name>
            <Row><Cell>Date de naissance:</Cell><Cell>{moment(patient.admin.date_de_naissance).format('DD-MM-YYYY')}</Cell></Row>
            <Row><Cell>Genre:</Cell><Cell>{patient.admin.Genre}</Cell></Row>
            <Row><Cell>ID:</Cell><Cell>{patient.id}</Cell></Row>
            <Cat>Biométrie</Cat>
            <Row><Cell>Poids:</Cell><Cell>{patient.biometrie.poids}Kg</Cell></Row>
            <Row><Cell>Taille:</Cell><Cell>{patient.biometrie.taille}cm</Cell></Row>
            <Cat>Constantes biologiques</Cat>
            <Row><Cell>HbA1c:</Cell><Cell>{patient.const_biologique.HbA1c}</Cell></Row>
            <Row><Cell>Cholesterol total:</Cell><Cell>{patient.const_biologique.Cholesterol_total}mg/dl</Cell></Row>
            <Row><Cell>Cholesterol HDL:</Cell><Cell>{patient.const_biologique.Cholesterol_HDL}mg/dl</Cell></Row>
            <Cat>Paramètres</Cat>
            <Row><Cell>PSS:</Cell><Cell>{patient.parametres.PSS}mmHg</Cell></Row>
            <Cat>Assuétudes</Cat>
            <Row><Cell>Conso. tabagique:</Cell><Cell>{patient.assuetudes.Consommation_tabagique}</Cell></Row>
          </Listed>
        ))}
      </List>
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
