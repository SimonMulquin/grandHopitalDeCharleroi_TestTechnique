//permet d'initialiser et définir des valeurs pour les propriétés du store redux
import { createValueReducer } from 'meteor/ssrwpo:ssr';
//reducers ( propriétés du store redux contenant l'état de l'application et ses états précédents )
import { reducer as formReducer } from 'redux-form';
const isMenuOpen = createValueReducer('isMenuOpen', false);
const targetedPatientsIds = createValueReducer('targetedPatientsIds', [3, 16 ,112 ,7]);

//reducers côté serveur
export const serverReducers = {
  form: formReducer,
  isMenuOpen,
  targetedPatientsIds
}

//reducers côté client
export const clientReducers = {

}

export default {
  ...serverReducers,
  ...clientReducers,
};
