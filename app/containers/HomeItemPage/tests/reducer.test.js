import expect from 'expect';
import homeItemPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('homeItemPageReducer', () => {
  it('returns the initial state', () => {
    expect(homeItemPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
