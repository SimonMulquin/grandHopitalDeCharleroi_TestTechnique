import React from 'react';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Aide à la création de formulaire lié à redux
import { Field, reduxForm, reset } from 'redux-form';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';
//Composants stylisés
import { SearchParamsForm, SearchParamsContainer, SubmitButton, ResetButton } from './styled.js';
import TextInput from './TextInput.jsx';
import SelectSexInput from './SelectSexInput.jsx';


const PatientsSearchForm = ({handleSubmit, reset, submit}) => (
  <SearchParamsContainer>
      <SearchParamsForm onClick={(e) => e.stopPropagation()} method="post">
        <Field name="sex" placeholder='genre' component={SelectSexInput} />
        <Field name="minAge" placeholder='age minimum' component={TextInput} />
        <Field name="maxAge" placeholder='age maximum' component={TextInput} />
        <Field name="imc" placeholder='BMI/IMC' component={TextInput} />
        <Field name="HbA1c" placeholder='HbA1c' component={TextInput} />
        <Field name="totalCholesterol" placeholder='cholesterol total' component={TextInput} />
        <Field name="HDLCholesterol" placeholder='Cholesterol HDL' component={TextInput} />
        <Field name="PSS" placeholder='PSS' component={TextInput} />
        <Field name="tabac" placeholder='conso. tabagique' component={TextInput} />
        <div>
          <Field name="id" placeholder='id' component={TextInput} />
          <SubmitButton onClick={handleSubmit((res) => {submit(res)})}>Rechercher</SubmitButton>
          <ResetButton onClick={handleSubmit(()=>(reset()))} />
        </div>
      </SearchParamsForm>
  </SearchParamsContainer>
);

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  reset() {
    dispatch(reset('SearchParamsForm'));
  },
  submit(res) {
    dispatch(valueSet('patientsSearchParams', res));
  }
});

export default reduxForm({
  form: 'SearchParamsForm',
  destroyOnUnmount: false,
  initialValues: {
    id: null,
    sex: 'both',
    minAge: null,
    maxAge: null,
    imc: null,
    HbA1c: null,
    totalCholesterol: null,
    HDLCholesterol: null,
    PSS: null,
    tabac: null
  }
})(connect(mapStateToProps, mapDispatchToProps)(PatientsSearchForm));
