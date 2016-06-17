import { createSelector } from 'reselect';
/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => state => state.get('login');

/**
 * Other specific selectors
 */

const selectUsername = () => createSelector(
  selectLoginDomain(),
  (loginState) => loginState.get('username')
);
const selectPassword = () => createSelector(
  selectLoginDomain(),
  (loginState) => loginState.get('password')
);
const selectError = () => createSelector(
  selectLoginDomain(),
  (loginState) => loginState.get('error')
);

/**
 * Default selector used by Login
 */

const selectLogin = () => createSelector(
  selectLoginDomain(),
    selectUsername(),
    selectPassword(),
    selectError(),
  (substate) => substate.toJS()
);

export default selectLogin;
export {
  selectLoginDomain,
};
