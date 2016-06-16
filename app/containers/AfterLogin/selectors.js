import { createSelector } from 'reselect';

/**
 * Direct selector to the afterLogin state domain
 */
const selectAfterLoginDomain = () => state => state.get('afterLogin');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AfterLogin
 */

const selectAfterLogin = () => createSelector(
  selectAfterLoginDomain(),
  (substate) => substate.toJS()
);

export default selectAfterLogin;
export {
  selectAfterLoginDomain,
};
