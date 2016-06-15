/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  LOGIN_REQUEST,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function changeUsername(username){
  return {
    type:CHANGE_USERNAME,
    username
  }
}

export function changePassword(password){
  return {
    type:CHANGE_PASSWORD,
    password
  }
}
export function loginRequest (data) {
  return {type: LOGIN_REQUEST, data}
}