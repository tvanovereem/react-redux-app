/*import { SET_BOSSES_ZONE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOSSES_ZONE:
      return action.zone;
    default:
      return state;
  }
};*/

import { combineReducers } from 'redux';
import bosses from './bosses';
import zone from './zone';

export default combineReducers({
  bosses,
  zone,
});

