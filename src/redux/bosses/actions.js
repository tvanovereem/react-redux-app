import { API_URL_WOW } from '../../constants';
import { API_URL} from '../../constants';
import { API_KEY } from '../../constants';

export const SET_BOSSES = 'SET_BOSSES';

export function getBosses() {
  return dispatch =>
    fetch(`${API_URL_WOW}/boss/${API_KEY}`)
      .then(res => res.json())
      .then(res => res.bosses)
      .then(bosses =>
        dispatch(setBosses(bosses))
      );
}

export function setBosses(bosses) {
  return {
    type: SET_BOSSES,
    bosses,
  };
}
