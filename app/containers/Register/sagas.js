import { take, call, put, fork } from 'redux-saga/effects';



// All sagas to be loaded
import { SET_AUTH } from '../HomePage/constants';
import { REGISTER_REQUEST } from './constants';

import { authorize, forwardTo } from '../HomePage/sagas';



export function * registerFlow() {
  while (true) {
    const request = yield take(REGISTER_REQUEST);
    const { username, password } = request.data;


    const wasSuccessful = yield call(authorize, { username, password, isRegistering: true });
    // If we could register a user, we send the appropiate actions
    if (wasSuccessful) {
      yield put({ type: SET_AUTH, newAuthState: true });
      forwardTo('/'); // Go to dashboard page
    }
  }
}
export function * authsagas() {
  yield fork(registerFlow);
}
export default [
  authsagas,
];
