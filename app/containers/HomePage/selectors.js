import { createSelector } from 'reselect';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => state => state.get('homePage');

/**
 * Other specific selectors
 */
const selectLoggedInState = () => createSelector(
  selectHomePageDomain(),
  (homePageState) => homePageState.get('loggedIn')
);
/**
 * Default selector used by HomePage
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  selectLoggedInState(),
  (substate) => substate.toJS()
);

export default selectHomePage;
export {
  selectHomePageDomain,
};
