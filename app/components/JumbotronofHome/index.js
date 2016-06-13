/**
*
* JumbotronofHome
*
*/

import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import styles from './styles.css';

function JumbotronofHome() {
  return (
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>Welcome to here ,register for your great time~~</p>
      <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
  );
}

export default JumbotronofHome;
