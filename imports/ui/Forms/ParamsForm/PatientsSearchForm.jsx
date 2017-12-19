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
        <Field name="sex" component={SelectSexInput} />
        <Field name="minAge" placeholder='age minimum' component={TextInput} />
        <Field name="maxAge" placeholder='age maximum' component={TextInput} />
        <Field name="minImc" placeholder='BMI/IMC minimum' component={TextInput} />
        <Field name="maxImc" placeholder='BMI/IMC maximum' component={TextInput} />
        <Field name="minTotalCholesterol" placeholder='cholesterol total min.' component={TextInput} />
        <Field name="maxTotalCholesterol" placeholder='cholesterol total max.' component={TextInput} />
        <Field name="minHDLCholesterol" placeholder='Cholesterol HDL minimum' component={TextInput} />
        <Field name="maxHDLCholesterol" placeholder='Cholesterol HDL maximum' component={TextInput} />
        <Field name="minPSS" placeholder='PSS minimum' component={TextInput} />
        <Field name="maxPSS" placeholder='PSS maximum' component={TextInput} />
        <Field name="minTabac" placeholder='conso. tabagique min.' component={TextInput} />
        <Field name="maxTabac" placeholder='conso. tabagique max.' component={TextInput} />
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
  destroyOnUnmount: false
})(connect(mapStateToProps, mapDispatchToProps)(PatientsSearchForm));
