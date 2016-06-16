/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD2,
  CHANGE_EMAILADDRESS,
  REGISTER_REQUEST,
} from './constants';

const initialState = fromJS({
  username: '',
  emailaddress: '',
  password: '',
  password2: '',

});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
      .set('username', action.name);
    case CHANGE_PASSWORD:
      return state
      .set('password', action.password);
    case CHANGE_PASSWORD2:
      return state
      .set('password2', action.password2);
    case CHANGE_EMAILADDRESS:
      return state
      .set('emailaddress', action.emailaddress);
    case REGISTER_REQUEST:
    default:
      return state;
  }
}

export default registerReducer;
