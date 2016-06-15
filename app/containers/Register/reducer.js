/*
 *
 * Register reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD2,
  CHANGE_EMAILADDRESS,
  REGISTER_REQUEST,
} from './constants';

const initialState = fromJS({
  username:'',
  emailaddress:'',
  password:'',
  password2:'',

});

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      console.log(action.name)
      return state
      .set('username',action.name);
    case CHANGE_PASSWORD:
      console.log(action.password)
      return state
      .set('password',action.password);
    case CHANGE_PASSWORD2:
      console.log(action.password2)
      return state
      .set('password2',action.password2);
    case CHANGE_EMAILADDRESS:
      console.log(action.emailaddress)
      return state
      .set('emailaddress',action.emailaddress);
    case REGISTER_REQUEST:
      console.log('the register reducer dose work')
    default:
      return state;
  }
}

export default registerReducer;
