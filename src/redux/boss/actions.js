import { API_URL_WOW } from '../../constants';
import { API_KEY } from '../../constants';

export const SET_CURRENT_BOSS = 'SET_CURRENT_BOSS';
export const SET_BOSS_PROFILE = 'SET_BOSS_PROFILE';
export const SET_BOSS_ZONE = 'SET_BOSS_ZONE';


export function setCurrentBoss(id) {
  return {
    type: SET_CURRENT_BOSS,
    id,
  };
}

export function setBossProfile(profile) {
  return {
    type: SET_BOSS_PROFILE,
    profile,
  };
}

export function getBossProfile(id) {
  return dispatch =>
    fetch(`${API_URL_WOW}/boss/${id}${API_KEY}`)
      .then(res => res.json())
      .then(profile => {
        dispatch(setBossProfile(profile));
        dispatch(getBossZone(profile.zoneId));
      });
}

export function setBossZone(zone) {
  return {
    type: SET_BOSS_ZONE,
    zone,
  };
}

export function getBossZone(id) {
  return dispatch =>
    fetch(`${API_URL_WOW}/zone/${id}${API_KEY}`)
      .then(res => res.json())
      .then(zone =>
        dispatch(setBossZone(zone))
      );
}

