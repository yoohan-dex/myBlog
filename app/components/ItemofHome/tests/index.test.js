import ItemofHome from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<ItemofHome />', () => {
  it('should render its children', () => {
    const children = (<h1>TEST</h1>);
    const renderedComponent = shallow(
      <ItemofHome>
        {children}
      </ItemofHome>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
