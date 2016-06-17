/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
} from './constants';
import {
  REQUEST_ERROR,
  CLEAR_ERROR,
} from '../HomePage/constants';
const initialState = fromJS({
  username: '',
  password: '',
  error: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_USERNAME:
      return state
        .set('username', action.username);
    case CHANGE_PASSWORD:
      console.log('changepassword dispatch')
      return state
        .set('password', action.password);
    case REQUEST_ERROR:
      console.log('login dispatch error')
      return state
        .set('error', action.error);
    case CLEAR_ERROR:
      return state
        .set('error', '');
    default:
      return state;
  }
}

export default loginReducer;
