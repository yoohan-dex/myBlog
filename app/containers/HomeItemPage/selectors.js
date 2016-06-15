import { createSelector } from 'reselect';

/**
 * Direct selector to the homeItemPage state domain
 */
const selectHomeItemPageDomain = () => state => state.get('homeItemPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by HomeItemPage
 */

const selectHomeItemPage = () => createSelector(
  selectHomeItemPageDomain(),
  (substate) => substate.toJS()
);

export default selectHomeItemPage;
export {
  selectHomeItemPageDomain,
};
