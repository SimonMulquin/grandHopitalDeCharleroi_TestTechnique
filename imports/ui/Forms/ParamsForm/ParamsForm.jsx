import React from 'react';
//Composants stylisés
import components from './styled.js';
//Permet l'accès à redux
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';

const { Container, Heading, Toggle } = components;

const ParamsForm = ({ paramsState, toPatients, toData })=>(
  <Container>
    <Heading>
      <Toggle onClick={()=>(toPatients())} active={paramsState === 'patients'}>Patients</Toggle>
      <Toggle onClick={()=>(toData())} active={paramsState === 'data'}>Données</Toggle>
    </Heading>
  </Container>
);

//Donne accès au store redux et aux actions à ParamsForm
const mapStateToProps = store => ({
  paramsState: store.paramsState
});

const mapDispatchToProps = dispatch => ({
  toPatients() {
    dispatch(valueSet('paramsState', 'patients'));
  },
  toData() {
    dispatch(valueSet('paramsState', 'data'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ParamsForm);
