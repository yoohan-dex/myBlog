/**
*
* RegisterBox
*
*/

import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import styles from './styles.css';

class RegisterBox extends React.Component {

  constructor() {
    super();
    this.registerSubmit = this.registerSubmit.bind(this);
  }
  registerSubmit(evt) {
    evt.preventDefault();
    this.props.onRegiterSubmit(this.props.username, this.props.emailaddress, this.props.password);
  }

  render() {
    return (
      <div ClassName={styles.formbox}>
        <Row>
          <Col md={4} mdOffset={4}>
            <h3>Registration</h3>
            <hr />
            <form onSubmit={this.registerSubmit}>
              <FormGroup controlId="register-username">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  placehold="input your name"
                  onChange={this.props.onChangeUsername}
                />
              </FormGroup>
              <FormGroup controlId="register-email">
                <ControlLabel>Email address</ControlLabel>
                <FormControl
                  type="email"
                  placehold="input your Email"
                  onChange={this.props.onChangeEmailaddress}
                />
              </FormGroup>
              <FormGroup controlId="register-password1">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  placehold="input your password"
                  onChange={this.props.onChangePassword}
                />
              </FormGroup>
              <FormGroup controlId="register-password2">
                <ControlLabel>Password again</ControlLabel>
                <FormControl
                  type="password"
                  placehold="input your password"
                  
                />
              </FormGroup>
              <Button
                bsStyle="primary"
              // disabled
                type="submit" block
              >
                Submit
              </Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
RegisterBox.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  emailaddress: React.PropTypes.string.isRequired,
  onRegiterSubmit: React.PropTypes.func.isRequired,
  onChangeUsername: React.PropTypes.func.isRequired,
  onChangeEmailaddress: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
};

export default RegisterBox;
