/**
*
* RegisterBox
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import styles from './styles.css';

class RegisterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      difference: false,
      isEmpty: false,
    };
    this.registerSubmit = this.registerSubmit.bind(this);
  }


  registerSubmit(evt) {
    evt.preventDefault();
    if (this.props.username.trim() && this.props.emailaddress.trim() && this.props.password.trim() !== '') {
      this.props.onRegiterSubmit(this.props.username, this.props.emailaddress, this.props.password);
    } else {
      this.setState({
        isEmpty: true,
      });
    }
  }
  render() {
    let emptymessage = this.state.isEmpty ? (
      <Alert bsStyle="warning"><strong>you have somethins didn't input</strong></Alert>
    ) : null;
    let differencemessage = this.props.password !== this.props.password2 ? (
      <Alert bsStyle="warning"><strong>your password look like not really correct</strong></Alert>
    ) : null;
    let alertMessage = this.props.error ? (
      <Alert bsStyle="warning"><strong>{this.props.error}</strong></Alert>
    ) : null;
    return (
      <div ClassName={styles.formbox}>
        <Row>
          <Col md={4} mdOffset={4}>
            <h3>Registration</h3>
            <hr />
            {alertMessage}
            <form onSubmit={this.registerSubmit}>
              <FormGroup controlId="register-username">
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.username}
                  placeholder="input your name"
                  onChange={this.props.onChangeUsername}
                />
              </FormGroup>
              <FormGroup controlId="register-email">
                <ControlLabel>Email address</ControlLabel>
                <FormControl
                  type="email"
                  value={this.props.emailaddress}
                  autoCorrect="off"
                  autoCapitalize="off"
                  placeholder="input your Email"
                  onChange={this.props.onChangeEmailaddress}
                />
              </FormGroup>
              <FormGroup controlId="register-password1">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={this.props.password}
                  placeholder="input your password"
                  onChange={this.props.onChangePassword}
                />
              </FormGroup>
              {differencemessage}
              <FormGroup controlId="register-password2">
                <ControlLabel>Password again</ControlLabel>
                <FormControl
                  type="password"
                  value={this.props.password2}
                  placeholder="input your password"
                  onChange={this.props.onChangePassword2}
                />
              </FormGroup>
              {emptymessage}
              <Button
                bsStyle="primary"
                disabled={this.props.password !== this.props.password2}
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  password2: PropTypes.string.isRequired,
  emailaddress: PropTypes.string.isRequired,
  error: PropTypes.string,
  onRegiterSubmit: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangeEmailaddress: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangePassword2: PropTypes.func.isRequired,
};

export default RegisterBox;
