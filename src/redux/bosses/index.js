import { SET_BOSSES } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOSSES:
      return action.bosses;
    default:
      return state;
  }
};
