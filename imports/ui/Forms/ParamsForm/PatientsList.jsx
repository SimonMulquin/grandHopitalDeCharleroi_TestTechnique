import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';
//composants stylisés
import { PatientsToAdd, AddPatient } from './styled.js';


const PatientsList = ({data, isInStore, addToTargets, targetedPatientsIds, patientsSearchParams})=>(
  <PatientsToAdd>
    {console.log(patientsSearchParams)}
    {(data.loading || data.error) ? <span>Chargement ...</span> : data.patientsToTarget.map((patient, index)=>(
      <AddPatient  active={isInStore(patient.id)} onClick={()=>(addToTargets(targetedPatientsIds, patient.id))} key={index}>{patient.name}</AddPatient>
    ))}
  </PatientsToAdd>
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
      searchParams: ownProps.patientsSearchParams
    }
  }
}})(PatientsList)

const mapStateToProps = store => ({
  targetedPatientsIds: store.targetedPatientsIds,
  isInStore: (argId)=>{
    if (_.some(store.targetedPatientsIds, (id)=>(id === argId))){
      return true;
    } else {
      return false;
    }
  },
  patientsSearchParams: store.patientsSearchParams
});

const mapDispatchToProps = dispatch => ({
  addToTargets(targetedPatientsIds, patientId) {
    if (targetedPatientsIds.length >= 4) {
      alert('Vous ne pouvez pas sélectionner plus de 4 patients simultanément.');
      return false
    }
    dispatch(valueSet('targetedPatientsIds', [...targetedPatientsIds, patientId]));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientsListWithData);
