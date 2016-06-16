/**
*
* LitleProfile
*
*/

import React from 'react';
import { Thumbnail, Button, Popover } from 'react-bootstrap';
import styles from './styles.css';

function LitleProfile() {
    return (
      <Popover placement="right" positionLeft={200} positionTop={50} title="Popover right">
        <Thumbnail src="http://img1.3lian.com/gif/more/11/201301/e47524afabdc211536e595743be46e92.jpg" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Popover>
    );
  }
}

export default LitleProfile;
