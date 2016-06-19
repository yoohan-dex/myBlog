/**
*
* RegisterBox
*
*/

import React, { PropTypes } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import Loading from 'react-loading';
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
    const { username, password, emailaddress } = this.props.auth;
    if (username.trim() && emailaddress.trim() && password.trim() !== '') {
      this.setState({
        isEmpty: false,
      });
      this.props.onRegiterSubmit(username, emailaddress, password);
    } else {
      this.setState({
        isEmpty: true,
      });
    }
  }
  render() {
    let { username, password, password2, emailaddress } = this.props.auth;
    let { error, onChangeUsername, onChangeEmailaddress, onChangePassword, onChangePassword2 } = this.props;
    let emptymessage = this.state.isEmpty ? (
      <Alert bsStyle="warning"><strong>you have somethins didn't input</strong></Alert>
    ) : null;
    let differencemessage = password !== password2 ? (
      <Alert bsStyle="warning"><strong>your password look like not really correct</strong></Alert>
    ) : null;
    let alertMessage = error ? (
      <Alert bsStyle="warning"><strong>{error}</strong></Alert>
    ) : null;
    let submitButton = this.props.currentlySending ? (
      <Col md={4} mdOffset={4} xs={4} xsOffset={4}>
        <Loading type="bubbles" color="#e3e3e3" />
        {console.log('loading')}
      </Col>) : (
      <Button
        bsStyle="primary"
        disabled={password !== password2}
        type="submit" block
      >
      {console.log('button')}
      Submit
      </Button>
    );
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
                  value={username}
                  onChange={onChangeUsername}
                />
              </FormGroup>
              <FormGroup controlId="register-email">
                <ControlLabel>Email address</ControlLabel>
                <FormControl
                  type="email"
                  value={emailaddress}
                  autoCorrect="off"
                  autoCapitalize="off"
                  onChange={onChangeEmailaddress}
                />
              </FormGroup>
              <FormGroup controlId="register-password">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </FormGroup>
              {differencemessage}
              <FormGroup controlId="register-password2">
                <ControlLabel>Password again</ControlLabel>
                <FormControl
                  type="password"
                  value={password2}
                  onChange={onChangePassword2}
                />
              </FormGroup>
              {emptymessage}
              {submitButton}

            </form>
          </Col>
        </Row>
      </div>
    );
  }
}

RegisterBox.propTypes = {
  auth: PropTypes.object,
  error: PropTypes.string,
  currentlySending: PropTypes.bool,
  onChangeUsername: PropTypes.func,
  onChangeEmailaddress: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangePassword2: PropTypes.func,
  onRegiterSubmit: PropTypes.func,
};

export default RegisterBox;
