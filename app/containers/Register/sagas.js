import { take, call, put, select, fork } from 'redux-saga/effects';
import { selectUsername } from './selectors'


// All sagas to be loaded
import { SET_AUTH, } from '../HomePage/constants'
import { REGISTER_REQUEST, } from './constants';

import { authorize, forwardTo } from '../HomePage/sagas'
export default [
  authsagas,
];

// Individual exports for testing
export function * authsagas() {
  yield fork(registerFlow)
}


export function * registerFlow(){
  while(true){
    let request = yield take(REGISTER_REQUEST)
    let { username, emailaddress, password, } =request.data;

    
    let wasSuccessful = yield call(authorize, {username, password, isRegistering: true})
    console.log('wasSuccessful is '+wasSuccessful);
    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      console.log('wait for setAuth')
      yield put({type: SET_AUTH, newAuthState: true})
      console.log('wait for jump')
      forwardTo('/') // Go to dashboard page
    }
  }
}
