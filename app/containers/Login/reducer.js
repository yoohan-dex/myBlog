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

const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_USERNAME:
      return state
        .set('username', action.username);
    case CHANGE_PASSWORD:
      return state
        .set('password', action.password);
    default:
      return state;
  }
}

export default loginReducer;
