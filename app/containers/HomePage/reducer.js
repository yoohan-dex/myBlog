/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_AUTH,
  SENDING_REQUEST,
  REQUEST_ERROR,
  CLEAR_ERROR,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD2,
  CHANGE_EMAILADDRESS,
  RESET_FORM,
} from './constants';
import auth from '../../auth';

const initialState = fromJS({
  auth: {
    username: '',
    password: '',
    password2: '',
    emailaddress: '',
  },
  loggedIn: auth.loggedIn(),
  error: '',
  currentlySending: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_AUTH:
      return state
        .set('loggedIn', action.newAuthState);
    case SENDING_REQUEST:
      return state
        .set('currentlySending', action.sending);
    case REQUEST_ERROR:
      return state
        .set('error', action.error);
    case CLEAR_ERROR:
      return state
        .set('error', '');
    case CHANGE_USERNAME:
      return state
        .setIn(['auth', 'username'], action.username);
    case CHANGE_PASSWORD:
      return state
        .setIn(['auth', 'password'], action.password);
    case CHANGE_PASSWORD2:
      return state
        .setIn(['auth', 'password2'], action.password);
    case CHANGE_EMAILADDRESS:
      return state
        .setIn(['auth', 'emailaddress'], action.emailaddress);
    case RESET_FORM:
      return state
        .setIn(['auth', 'username'], '')
        .setIn(['auth', 'password'], '')
        .setIn(['auth', 'password2'], '')
        .setIn(['auth', 'emailaddress'], '');
    default:
      return state;
  }
}

export default homePageReducer;
