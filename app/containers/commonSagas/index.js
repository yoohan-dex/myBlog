import {hashSync} from 'bcryptjs'
import genSalt from '../../auth/salt'
import {browserHistory} from 'react-router'
import {take, call, put, fork, race} from 'redux-saga/effects'
import auth from '../../auth'

import {
  SENDING_REQUEST,
  REQUEST_ERROR,
} from '../App/actions'

export default function * authorize ({username, password, isRegistering}) {
  // We send an action that tells Redux we're sending a request
  yield put({type: SENDING_REQUEST, sending: true})

  // We then try to register or log in the user, depending on the request
  try {
    let salt = genSalt(username)
    let hash = hashSync(password, salt)
    let response

    // For either log in or registering, we call the proper function in the `auth`
    // module, which is asynchronous. Because we're using generators, we can work
    // as if it's synchronous because we pause execution until the call is done
    // with `yield`!
    if (isRegistering) {
      response = yield call(auth.register, username, hash)
    } else {
      response = yield call(auth.login, username, hash)
    }

    return response
  } catch (error) {
    // If we get an error we send Redux the appropiate action and return
    yield put({type: REQUEST_ERROR, error: error.message})

    return false
  } finally {
    // When done, we tell Redux we're not in the middle of a request any more
    yield put({type: SENDING_REQUEST, sending: false})
  }
}
