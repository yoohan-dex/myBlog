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
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD2,
  CHANGE_EMAILADDRESS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  RESET_FORM,
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
export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
export function changePassword2(password) {
  return {
    type: CHANGE_PASSWORD2,
    password,
  };
}
export function changeEmailaddress(emailaddress) {
  return {
    type: CHANGE_EMAILADDRESS,
    emailaddress,
  };
}
export function logout() {
  return { type: LOGOUT };
}
export function clearError() {
  return { type: CLEAR_ERROR };
}
export function loginRequest(auth) {
  return { type: LOGIN_REQUEST, auth };
}
export function registerRequest(auth) {
  return {
    type: REGISTER_REQUEST,
    auth,
  };
}
export function resetForm() {
  return { type: RESET_FORM };
}
