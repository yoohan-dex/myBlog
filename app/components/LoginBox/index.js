/**
*
* LoginBox
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, Alert } from 'react-bootstrap';
import Loading from 'react-loading';
import styles from './styles.css';
class LoginBox extends React.Component {
  constructor() {
    super();
    this.LoginSubmit = this.LoginSubmit.bind(this);
  }
  LoginSubmit(evt) {
    evt.preventDefault();
    this.props.onLoginSubmit(this.props.auth.username, this.props.auth.password);
  }
  render() {
    let { username, password } = this.props.auth;
    let { error, onChangeUsername, onChangePassword } = this.props;

    let alertMessage = error ? (
      <Alert bsStyle="warning"><strong>{error}</strong></Alert>
    ) : null;
    let submitButton = this.props.currentlySending ? (
      <Col md={4} mdOffset={4} xs={4} xsOffset={4}>
        <Loading type="bubbles" color="#e3e3e3" />
      </Col>) : (
      <Button bsStyle="primary" type="submit" block>
        Submit
      </Button>
    );
    return (
      <div ClassName={styles.formbox}>
        <Row>
          <Col md={4} mdOffset={4}>
            <h3>Login</h3>
            <hr />
            {alertMessage}
            <form onSubmit={this.LoginSubmit}>
              <FormGroup controlId="register-username">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  value={username}
                  placehold="input your name"
                  onChange={onChangeUsername}
                />
              </FormGroup>

              <FormGroup controlId="register-password">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={password}
                  placehold="input your password"
                  onChange={onChangePassword}
                />
              </FormGroup>
              <FormGroup>
                <Checkbox>
                  Remember me
                </Checkbox>
              </FormGroup>
              {submitButton}
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
LoginBox.propTypes = {
  auth: PropTypes.object,
  error: PropTypes.string,
  currentlySending: PropTypes.bool,
  onChangeUsername: PropTypes.func,
  onChangePassword: PropTypes.func,
  onLoginSubmit: PropTypes.func,
};

export default LoginBox;
