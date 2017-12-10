import React from 'react';
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';
//composants stylisés
import {
  StyledHeader,
  MainTitle,
  Menu,
  Dir,
  MenuButton,
  Icon
} from './styled.jsx';

/*
déconstruit les props pour extraire toggleMenu et isMenuOpen, nécéssaires pour la version mobile du header.
isMenuOpen: booleen, true: le menu est ouvert, false: le menu est fermé
toggleMenu: prend ce booleen en argument pour inverser sa valeur
*/
const Header = ({toggleMenu, isMenuOpen}) => (
  <StyledHeader isMenuOpen={isMenuOpen}>
    <Menu>
      <MainTitle to='/' />
    </Menu>
    <MenuButton onClick={()=>(toggleMenu(isMenuOpen))}>
      <Icon isMenuOpen={isMenuOpen}/>
    </MenuButton>
  </StyledHeader>
);

//Donne accès au store redux et aux actions à Header
//la prop isMenuOpen = la valeur de isMenuOpen dans le store redux
const mapStateToProps = store => ({
	isMenuOpen: store.isMenuOpen
});
//toggleMenu dispatche une action qui va changer la valeur de isMenuOpen dans le store redux en l'inverse de menuState, passé en argument.
const mapDispatchToProps = dispatch => ({
  toggleMenu(menuState) {
    dispatch(valueSet('isMenuOpen', !menuState));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
