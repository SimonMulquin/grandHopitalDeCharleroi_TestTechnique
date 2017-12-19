import React from 'react';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Aide à la création de formulaire lié à redux
import { Field, reduxForm, reset } from 'redux-form';
//Composants stylisés
import { SearchParamsForm, SearchParamsContainer, SubmitButton, ResetButton } from './styled.js';


const PatientsSearchForm = ({handleSubmit, reset}) => (
  <SearchParamsContainer>
      <SearchParamsForm onClick={(e) => e.stopPropagation()} method="post">
        <SubmitButton onClick={handleSubmit((res) => {submit()})}>Rechercher</SubmitButton>

      </SearchParamsForm>
      <ResetButton onClick={()=>(reset())} />
  </SearchParamsContainer>
);

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  reset() {
    dispatch(reset('SearchParamsForm'));
  }
});

export default reduxForm({
  form: 'SearchParamsForm',
  destroyOnUnmount: false,
})(connect(mapStateToProps, mapDispatchToProps)(PatientsSearchForm));
