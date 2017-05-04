import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import zone from './zone';

export default combineReducers({
  id,
  profile,
  zone,
});
