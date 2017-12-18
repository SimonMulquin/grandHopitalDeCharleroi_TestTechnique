import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//composants stylisés
import { List } from './styled.js';


const PatientsList = (props)=>(
  <div>
    {(props.data.loading || props.data.error) ? <span>Chargement ...</span> : props.data.patientsToTarget.map((patient, index)=>(
      <span key={index}>{patient.name} {patient.id}</span>
    ))}
  </div>
);

//Requête graphql => Séléctionne les données à envoyer dans data, prend un argument devant être un array contenant strictement des valeurs de type int.
const queryPatientsToTarget = gql`
  query patientsToTargetQuery {
    patientsToTarget {
      id
      name
    }
  }
`;

/*Construit le composant PatientsLst en lui envoyant data en props.
Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.
ownProps contient les props recues du connect et variables contient les paramètres de la requête*/
const PatientsListWithData = graphql(queryPatientsToTarget, {
  options: (ownProps) => { return {
    variables: {
      searchParams: ownProps.searchParams
    }
  }
}})(PatientsList)

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsListWithData);
