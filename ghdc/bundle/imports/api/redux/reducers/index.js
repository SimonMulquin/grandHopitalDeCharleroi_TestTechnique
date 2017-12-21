//permet de définir et d'initialiser des valeurs pour les propriétés du store redux
import { createValueReducer } from 'meteor/ssrwpo:ssr';
//reducers ( propriétés du store redux contenant l'état de l'application et ses états précédents )
import { reducer as formReducer } from 'redux-form';
const isMenuOpen = createValueReducer('isMenuOpen', false);
const isParamsOpen = createValueReducer('isParamsOpen', false);
const paramsState = createValueReducer('paramsState', 'patients');
const targetedPatientsIds = createValueReducer('targetedPatientsIds', []);
const graphsToShow = createValueReducer('graphsToShow', [
  {name: 'Age', toShow: true},
  {name: 'BMI/IMC', toShow: true},
  {name: 'HbA1c', toShow: true},
  {name: 'Cholesterol total', toShow: true},
  {name: 'Cholesterol HDL', toShow: true},
  {name: 'PSS', toShow: true},
  {name: 'Conso. tabagique', toShow: true}
]);
const patientsSearchParams = createValueReducer('patientsSearchParams', {
  id: null,
  sex: 'both',
  minAge: null,
  maxAge: null,
  minImc: null,
  maxImc: null,
  minHbA1c: null,
  maxHbA1c: null,
  minTotalCholesterol: null,
  maxTotalCholesterol: null,
  minHDLCholesterol: null,
  maxHDLCHolesterol: null,
  minPSS: null,
  maxPSS: null,
  minTabac: null,
  maxTabac: null
});

//reducers côté serveur (et client)
export const serverReducers = {
  form: formReducer,
  isMenuOpen,
  isParamsOpen,
  paramsState,
  targetedPatientsIds,
  graphsToShow,
  patientsSearchParams
}

//reducers côté client
export const clientReducers = {

}

export default {
  ...serverReducers,
  ...clientReducers,
};
