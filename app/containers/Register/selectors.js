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
const selectPassword = () => createSelector(
  selectRegisterDomain(),
  (registerState) => registerState.get('password')
);
const selectEmailaddress = () => createSelector(
  selectRegisterDomain(),
  (registerState) => registerState.get('emailaddress')
);

/**
 * Default selector used by Register
 */

const selectRegister = () => createSelector(
  selectRegisterDomain(),
  selectUsername(),
  selectPassword(),
  selectEmailaddress(),
  (substate) => substate.toJS()
);

export default selectRegister;
export {
  selectRegisterDomain,
  selectUsername,
  selectPassword,
};
