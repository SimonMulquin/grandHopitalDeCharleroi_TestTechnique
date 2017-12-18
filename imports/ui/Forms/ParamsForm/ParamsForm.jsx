import React from 'react';
  //Composants stylisés
  import { Container, Heading, Toggle, Form } from './styled.js';
//Permet l'accès à redux
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';

//composants du form
import GraphsToShow from '/imports/ui/Forms/ParamsForm/GraphsToShow.jsx';
import PatientsSearchForm from '/imports/ui/Forms/ParamsForm/PatientsSearchForm.jsx';
import PatientsList from '/imports/ui/Forms/ParamsForm/PatientsList.jsx';

const ParamsForm = ({ paramsState, graphsToShow, toPatients, toData })=>(
  <Container>
    <Heading>
      <Toggle onClick={()=>(toPatients())} active={paramsState === 'patients'}>Patients</Toggle>
      <Toggle onClick={()=>(toData())} active={paramsState === 'data'}>Données</Toggle>
    </Heading>
    { paramsState === 'data' ?
      <Form>
        <GraphsToShow graphsToShow={graphsToShow} />
      </Form>
    :
      <Form>
        <PatientsSearchForm />
        <PatientsList />
      </Form>
    }
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
