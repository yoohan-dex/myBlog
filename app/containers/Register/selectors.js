import { createSelector } from 'reselect';

/**
 * Direct selector to the register state domain
 */
const selectRegisterDomain = () => state => state.get('register');

/**
 * Other specific selectors
 */
const selectUsername = () => createSelector(
  selectRegisterDomain(),
  (registerState) => registerState.get('username')
);

/**
 * Default selector used by Register
 */

const selectRegister = () => createSelector(
  selectRegisterDomain(),
  selectUsername(),

  (substate) => substate.toJS()
);

export default selectRegister;
export {
  selectRegisterDomain,
  selectUsername,
};
