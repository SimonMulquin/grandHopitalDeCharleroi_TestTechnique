import React from 'react';
//librairies nécéssaires à la requête graphql
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
//Permet l'accès à redux
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';
//composants stylisés
import {
  StyledHeader,
  MainTitle,
  Menu,
  Target,
  MenuButton,
  Icon
} from './styled.jsx';

/*
déconstruit les props pour extraire toggleMenu et isMenuOpen, nécéssaires pour la version mobile du header.
isMenuOpen: booleen, true: le menu est ouvert, false: le menu est fermé
toggleMenu: prend ce booleen en argument pour inverser sa valeur
*/
const Header = ({toggleMenu, isMenuOpen, targetedPatients}) => (
  <StyledHeader isMenuOpen={isMenuOpen}>
    <Menu>
      <MainTitle to='/' />
      {targetedPatients().map((patient, index)=>(
        <Target to='/' number={index} key={index}>{patient.name}</Target>
      ))}
    </Menu>
    <MenuButton onClick={()=>(toggleMenu(isMenuOpen))}>
      <Icon isMenuOpen={isMenuOpen}/>
    </MenuButton>
  </StyledHeader>
);

//Donne accès au store redux et aux actions à Header
//la prop isMenuOpen = la valeur de isMenuOpen dans le store redux
//targetedPatients = patients ciblés dans la liste recue de la requête graphql selon le store redux.
//patientsList = cette liste.
const mapStateToProps = (store, ownProps) => ({
	isMenuOpen: store.isMenuOpen,
  targetedPatients: ()=>{
    if (!ownProps.data.loading && !ownProps.data.error){
      return _.filter(ownProps.data.patientsToTarget, (patient)=>{
        /*si un des id dans targetedPatientsIds correspond à l'id du patient*/
        if (_.some(store.targetedPatientsIds, (id)=>(id === patient.id))){
          /*ajoute ce patient au tableau renvoyé en props*/
          return patient;
        }
      });
    } else {
      return [];
    }
  },
  patientsList: (ownProps.data.loading || ownProps.data.error) ? [] : ownProps.data.patientsToTarget

});
//toggleMenu dispatche une action qui va changer la valeur de isMenuOpen dans le store redux en l'inverse de menuState, passé en argument.
const mapDispatchToProps = dispatch => ({
  toggleMenu(menuState) {
    dispatch(valueSet('isMenuOpen', !menuState));
  }
});

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

//Requête graphql => Séléctionne les données à envoyer dans data.
const queryPatientsToTarget = gql`
  query patientsToTargetQuery {
    patientsToTarget {
      name
      id
    }
  }
`;

/*Construit et exporte le composant ConnectedHeader en lui envoyant data en props.
Data contient des propriétés error et loading afin de gérer le  cas d'une réponse non conforme ou trop lente.*/
export default graphql(queryPatientsToTarget)(ConnectedHeader);
