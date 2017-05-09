import { SET_BOSSES_ZONE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOSSES_ZONE:
      return action.zone;
    default:
      return state;
  }
};

