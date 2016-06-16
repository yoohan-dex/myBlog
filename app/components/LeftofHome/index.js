/**
*
* LeftofHome
*
*/

import React from 'react';
import { Col } from 'react-bootstrap';


const LeftofHome = (props) => (
  <Col md={8} sm={12} xs={12}>
    {props.children}
  </Col>
);

LeftofHome.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default LeftofHome;
