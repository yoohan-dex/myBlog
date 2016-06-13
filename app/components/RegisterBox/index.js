/**
*
* RegisterBox
*
*/

import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button} from 'react-bootstrap';
import styles from './styles.css';

class RegisterBox extends React.Component {
  render() {
    return (
      <div ClassName={styles.formbox}>
        <Row>
          <Col md={4} mdOffset={4}>
            <h3>Rigistration</h3>
            <hr/>
            <form action="">
              <FormGroup controlId="register-username">
                <ControlLabel>Username</ControlLabel>
                <FormControl type="text" 
                placehold="input your name"
                onChange={this.props.onUserChange}
                />
              </FormGroup>
              <FormGroup controlId="register-email">
                <ControlLabel>Email address</ControlLabel>
                <FormControl type="email" placehold="input your Email"/>
              </FormGroup>
              <FormGroup controlId="register-password1">
                <ControlLabel>Password</ControlLabel>
                <FormControl type="password" placehold="input your password"/>
              </FormGroup>
              <FormGroup controlId="register-password2">
                <ControlLabel>Password again</ControlLabel>
                <FormControl type="password" placehold="input your password"/>
              </FormGroup>
              <Button bsStyle="primary" type="submit" block>
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RegisterBox;
