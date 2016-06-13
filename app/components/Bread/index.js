/**
*
* Bread
*
*/

import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import styles from './styles.css';

class Bread extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Data
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Bread;
