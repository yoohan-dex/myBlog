import expect from 'expect';
import afterLoginReducer from '../reducer';
import { fromJS } from 'immutable';

describe('afterLoginReducer', () => {
  it('returns the initial state', () => {
    expect(afterLoginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
