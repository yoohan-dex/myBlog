/*
 *
 * Register actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
  CHANGE_EMAILADDRESS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD2,
  REGISTER_REQUEST,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}
export function changeEmailaddress(emailaddress) {
  return {
    type: CHANGE_EMAILADDRESS,
    emailaddress,
  };
}
export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}
export function changePassword2(password2) {
  return {
    type: CHANGE_PASSWORD2,
    password2,
  };
}
export function registerRequest(data) {
  return {
    type: REGISTER_REQUEST,
    data,
  };
}
