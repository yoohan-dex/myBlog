/**
*
* RightofHome
*
*/

import React from 'react';
import { Row, Col} from 'react-bootstrap';
import styles from './styles.css';

class RightofHome extends React.Component {
  render() {
    return (
      
        <Col md={4} sm={12} xs={12} xsHidden>
          {this.props.children}
        </Col>
      
    );
  }
}

export default RightofHome;
