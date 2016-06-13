/**
*
* LeftofHome
*
*/

import React from 'react';
import { Row, Col} from 'react-bootstrap';
import styles from './styles.css';

class LeftofHome extends React.Component {
  render() {
    return (
      
        <Col md={8} sm={12} xs={12}>
          {this.props.children}
        </Col>
      
    );
  }
}

export default LeftofHome;
