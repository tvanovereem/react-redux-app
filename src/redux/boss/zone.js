import { SET_BOSS_ZONE } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BOSS_ZONE:
      return action.zoneId;
    default:
      return state;
  }
};
