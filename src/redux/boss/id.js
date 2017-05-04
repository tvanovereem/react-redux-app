import { SET_CURRENT_BOSS } from './actions';

const initialState = 0;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_BOSS:
      return action.id;
    default:
      return state;
  }
};
