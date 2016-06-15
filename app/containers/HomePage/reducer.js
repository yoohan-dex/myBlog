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
} from './constants';
import auth from '../../auth'

const initialState = fromJS({
    loggedIn: auth.loggedIn(),
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_AUTH:
      console.log('auth reducer work')
      return state
        .set('loggedIn',action.newAuthState)
    case SENDING_REQUEST:
      return state
        .set('currentlySending',action.sending) 
    case REQUEST_ERROR:
      return state
        .set('error',action.error)
    default:
      return state;
  }
}

export default homePageReducer;