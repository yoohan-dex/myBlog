import { take, call, put, select } from 'redux-saga/effects';
import { selectUsername } from './selectors'
// All sagas to be loaded
export default [
  defaultSaga,
  lookUsername,
];

// Individual exports for testing
export function* defaultSaga() {

}
export function* lookUsername(){
  
  const username = yield select(selectUsername());

}
