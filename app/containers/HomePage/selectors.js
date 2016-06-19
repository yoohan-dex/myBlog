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
const selectAuthState = () => createSelector(
  selectHomePageDomain(),
  (homePageState) => homePageState.get('auth')
);
const selectErrorState = () => createSelector(
  selectHomePageDomain(),
  (homePageState) => homePageState.get('error')
);
const selectCurrentlySending = () => createSelector(
  selectHomePageDomain(),
  (homePageState) => homePageState.get('currentlySending')
);

/**
 * Default selector used by HomePage
 */

const selectHomePage = () => createSelector(
  selectHomePageDomain(),
  selectLoggedInState(),
  selectErrorState(),
  selectCurrentlySending(),
  (substate) => substate.toJS()
);
const authSelector = () => createSelector(
  selectHomePageDomain(),
  selectAuthState(),
  selectCurrentlySending(),
  (substate) => substate.toJS()
);

export default selectHomePage;
export {
  selectHomePageDomain,
  selectErrorState,
  authSelector,
};
