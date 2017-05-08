import { API_URL_WOW } from '../../constants';
import { API_KEY } from '../../constants';

export const SET_BOSSES = 'SET_BOSSES';
export const SET_BOSSES_ZONE = 'SET_BOSSES_ZONE';

export function getBosses() {
  return dispatch =>
    fetch(`${API_URL_WOW}/boss/${API_KEY}`)
      .then(res => res.json())
      .then(res => res.bosses)
      .then(bosses => {
        dispatch(setBosses(bosses));
        dispatch(getBossesZone(6912));
      });
}

export function setBosses(bosses) {
  return {
    type: SET_BOSSES,
    bosses,
  };
}

export function setBossesZone(zone) {
  return {
    type: SET_BOSSES_ZONE,
    zone,
  };
}

export function getBossesZone(id) {
  return dispatch =>
    fetch(`${API_URL_WOW}/zone/${id}${API_KEY}`)
      .then(res => res.json())
      .then(zone =>
        dispatch(setBossesZone(zone))
      );
}
