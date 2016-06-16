/**
*
* RightofHome
*
*/

import React from 'react';
import { Col } from 'react-bootstrap';

const RightofHome = () => (
  <Col md={4} sm={12} xs={12} xsHidden>
    {this.props.children}
  </Col>
);

export default RightofHome;
