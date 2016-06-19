import LeftofHome from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<LeftofHome />', () => {
  it('should render its children',()=>{
    const children = (<h1>TEST</h1>);
    const renderedComponent = shallow(
      <LeftofHome>
        {children}
      </LeftofHome>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  })
});
