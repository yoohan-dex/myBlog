/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  REQUEST_ERROR,
  SENDING_REQUEST,
  SET_AUTH,
  LOGOUT,
  CLEAR_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function setAuthState(newAuthState) {
  return { type: SET_AUTH, newAuthState };
}
export function sendingRequest(sending) {
  return { type: SENDING_REQUEST, sending };
}
export function requestError(error) {
  return { type: REQUEST_ERROR, error };
}
export function logout() {
  return { type: LOGOUT };
}
export function clearError() {
  return { type: CLEAR_ERROR };
}

