import { hashSync } from 'bcryptjs';
import genSalt from '../../auth/salt';
import { browserHistory } from 'react-router';
import { take, call, put, fork, race } from 'redux-saga/effects';
import auth from '../../auth';


import {
  SENDING_REQUEST,
  REQUEST_ERROR,
  LOGOUT,
  SET_AUTH,
} from './constants';
// All sagas to be loaded


// Individual exports for testing


export function * authorize({ username, password, isRegistering }) {
  // We send an action that tells Redux we're sending a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // We then try to register or log in the user, depending on the request
  try {
    const salt = genSalt(username);
    const hash = hashSync(password, salt);
    let response;

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, username, hash);
    } else {
      response = yield call(auth.login, username, hash);
    }
    return response;
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put({ type: REQUEST_ERROR, error: error.message });

    return false;
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({ type: SENDING_REQUEST, sending: false });
  }
}
export function * logout() {
  // We tell Redux we're in the middle of a request
  yield put({ type: SENDING_REQUEST, sending: true });

  // Similar to above, we try to log out by calling the `logout` function in the
  // `auth` module. If we get an error, we send an appropiate action. If we don't,
  // we return the response.
  try {
    const response = yield call(auth.logout);
    yield put({ type: SENDING_REQUEST, sending: false });

    return response;
  } catch (error) {
    yield put({ type: REQUEST_ERROR, error: error.message });
  }
  return 0;
}
export function forwardTo(location) {
  browserHistory.push(location);
}

export function * logoutFlow() {
  while (true) {
    yield take(LOGOUT);
    yield put({ type: SET_AUTH, newAuthState: false });

    yield call(logout);
    forwardTo('/');
  }
}
export function * homeSagas() {
  yield fork(logoutFlow);
}
export default [
  homeSagas,
];
