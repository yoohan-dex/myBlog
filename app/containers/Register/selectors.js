import { createSelector } from 'reselect';
import { selectErrorState } from '../HomePage/selectors';
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
const selectPassword2 = () => createSelector(
  selectRegisterDomain(),
  (registerState) => registerState.get('password2')
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
  selectPassword2(),
  selectEmailaddress(),
  selectErrorState(),
  (substate) => substate.toJS()
);

export default selectRegister;
export {
  selectRegisterDomain,
  selectUsername,
  selectPassword,
};
