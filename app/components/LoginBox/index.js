/**
*
* LoginBox
*
*/

import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button } from 'react-bootstrap';
import styles from './styles.css';

class LoginBox extends React.Component {
  constructor() {
    super();
    this.LoginSubmit = this.LoginSubmit.bind(this);
  }
  LoginSubmit(evt) {
    evt.preventDefault();
    this.props.onLoginSubmit(this.props.username, this.props.password);
  }
  render() {
    return (
      <div ClassName={styles.formbox}>
        <Row>
          <Col md={4} mdOffset={4}>
            <h3>Login</h3>
            <hr />
            <form onSubmit={this.LoginSubmit}>
              <FormGroup controlId="register-username">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  placehold="input your name"
                  onChange={this.props.onChangeUsername}
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
              <FormGroup>
                <Checkbox>
                  Remember me
                </Checkbox>
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
LoginBox.propTypes = {
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  onLoginSubmit: React.PropTypes.func.isRequired,
  onChangeUsername: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
};

export default LoginBox;
