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


const PatientsList = ({data, isInStore, patientsToTarget, addToTargets, targetedPatientsIds})=>(
  <PatientsToAdd>
    <div>{patientsToTarget().length} trouvés</div>
    {(data.loading || data.error) ? <span>Chargement ...</span> : patientsToTarget().map((patient, index)=>(
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
      age
      sex
      imc
      totalCholesterol
      HDLCholesterol
      PSS
      tabac
    }
  }
`;

//cible les patients à afficher ou non selon les paramètres
const mapStateToProps = (store, ownProps) => {
  const { targetedPatientsIds, patientsSearchParams} = store
  return {
    targetedPatientsIds: targetedPatientsIds,
    isInStore: (argId)=>{
      if (_.some(targetedPatientsIds, (id)=>(id === argId))){
        return true;
      } else {
        return false;
      }
    },
    patientsSearchParams: patientsSearchParams,
    patientsToTarget: ()=>{
      if (ownProps.data.loading || ownProps.data.loading) {
        return [];
      }
      if (patientsSearchParams.id != null) {
        return [_.findWhere(ownProps.data.patientsToTarget, {id: parseInt(patientsSearchParams.id)})];
      }
      const filteredPatients = _.filter(ownProps.data.patientsToTarget, (patient)=>{
        if (
          ((patientsSearchParams.sex === 'both' || !patientsSearchParams.sex) || (patientsSearchParams.sex === patient.sex)) &&
          (parseInt(patientsSearchParams.minAge) <= patient.age || !patientsSearchParams.minAge) && ((patient.age <= parseInt(patientsSearchParams.maxAge) || !patientsSearchParams.maxAge)) &&
          (parseInt(patientsSearchParams.minImc) <= patient.imc || !patientsSearchParams.minImc) && ((patient.imc <= parseInt(patientsSearchParams.maxImc) || !patientsSearchParams.maxImc)) &&
          (parseInt(patientsSearchParams.minTotalCholesterol) <= patient.totalCholesterol || !patientsSearchParams.minTotalCholesterol) && ((patient.totalCholesterol <= parseInt(patientsSearchParams.maxTotalCholesterol) || !patientsSearchParams.maxTotalCholesterol)) &&
          (parseInt(patientsSearchParams.minHDLCholesterol) <= patient.HDLCholesterol || !patientsSearchParams.minHDLCholesterol) && ((patient.HDLCholesterol <= parseInt(patientsSearchParams.maxHDLCholesterol) || !patientsSearchParams.maxHDLCholesterol)) &&
          (parseInt(patientsSearchParams.minPSS) <= patient.PSS || !patientsSearchParams.minPSS) && ((patient.PSS <= parseInt(patientsSearchParams.maxPSS) || !patientsSearchParams.maxPSS)) &&
          (parseInt(patientsSearchParams.minTabac) <= patient.tabac || !patientsSearchParams.minTabac) && ((patient.tabac <= parseInt(patientsSearchParams.maxTabac) || !patientsSearchParams.maxTabac))
        ) {return true}
      });
      if ( filteredPatients.length < 1 ) {return ownProps.data.patientsToTarget} else {return filteredPatients;};
      return ownProps.data.patientsToTarget;
    }
  }
};

const mapDispatchToProps = dispatch => ({
  addToTargets(targetedPatientsIds, patientId) {
    if (targetedPatientsIds.length >= 4) {
      alert('Vous ne pouvez pas sélectionner plus de 4 patients simultanément.');
      return false
    }
    dispatch(valueSet('targetedPatientsIds', [...targetedPatientsIds, patientId]));
  },
});

/*Construit le composant PatientsLst en lui envoyant data en props.
Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.
ownProps contient les props recues du connect et variables contient les paramètres de la requête*/
const PatientsListWithData = graphql(queryPatientsToTarget)(connect(mapStateToProps, mapDispatchToProps)(PatientsList));

export default PatientsListWithData;
