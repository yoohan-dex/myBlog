/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
} from './constants';

const initialState = fromJS({
  username:'',
  emailaddress:'',
  password1:'',
  password2:'',
});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      console.log(action.name)
      return state
      .set('username',action.name);
    default:
      return state;
  }
}

export default registerReducer;
