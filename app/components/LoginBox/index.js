/**
*
* LoginBox
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Checkbox, Button, Alert } from 'react-bootstrap';
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
    let alertMessage = this.props.error ? (
      <Alert bsStyle="warning"><strong>{this.props.error}</strong></Alert>
    ) : null;
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
                  value={this.props.username}
                  placehold="input your name"
                  onChange={this.props.onChangeUsername}
                />
              </FormGroup>

              <FormGroup controlId="register-password1">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.props.password}
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string,
  onLoginSubmit: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
};

export default LoginBox;
