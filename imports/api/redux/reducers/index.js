//permet d'initialiser et définir des valeurs pour les propriétés du store redux
import { createValueReducer } from 'meteor/ssrwpo:ssr';
//reducers ( propriétés du store redux contenant l'état de l'application et ses états précédents )
import { reducer as formReducer } from 'redux-form';
const isMenuOpen = createValueReducer('isMenuOpen', false);
const targetedPatientsIds = createValueReducer('targetedPatientsIds', [33, 58, 175 ]);
const graphsToShow = createValueReducer('graphsToShow', ['Age', 'BMI/IMC', 'HbA1c', 'Cholesterol total', 'Cholesterol HDL', 'PSS', 'Conso. tabagique']);

//reducers côté serveur
export const serverReducers = {
  form: formReducer,
  isMenuOpen,
  targetedPatientsIds,
  graphsToShow
}

//reducers côté client
export const clientReducers = {

}

export default {
  ...serverReducers,
  ...clientReducers,
};
