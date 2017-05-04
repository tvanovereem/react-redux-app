import { combineReducers } from 'redux';
import bosses from './bosses';
import boss from './boss';

export default combineReducers({
  bosses,
  boss,
});