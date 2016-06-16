import { take, call, put, fork, race } from 'redux-saga/effects';

import { LOGIN_REQUEST } from './constants';
import { SET_AUTH, LOGOUT } from '../HomePage/constants';

import { logout, forwardTo, authorize } from '../HomePage/sagas';
// All sagas to be loaded
export function * loginFlow() {
  // Because sagas are generators, doing `while (true)` doesn't block our program
  // Basically here we say "this saga is always listening for actions"
  while (true) {
    // And we're listening for `LOGIN_REQUEST` actions and destructuring its payload
    const request = yield take(LOGIN_REQUEST);
    const { username, password } = request.data;

    // A `LOGOUT` action may happen while the `authorize` effect is going on, which may
    // lead to a race condition. This is unlikely, but just in case, we call `race` which
    // returns the "winner", i.e. the one that finished first
    const winner = yield race({
      auth: call(authorize, { username, password, isRegistering: false }),
      logout: take(LOGOUT),
    });

    // If `authorize` was the winner...
    if (winner.auth) {
      // ...we send Redux appropiate actions
      yield put({ type: SET_AUTH, newAuthState: true }); // User is logged in (authorized)
      forwardTo('/afterlogin');
      // If `logout` won...
    } else if (winner.logout) {
      // ...we send Redux appropiate action
      yield put({ type: SET_AUTH, newAuthState: false }); // User is not logged in (not authorized)
      yield call(logout); // Call `logout` effect
      forwardTo('/');
    }
  }
}
export function* defaultSaga() {
  yield fork(loginFlow);
}
export default [
  defaultSaga,
];

