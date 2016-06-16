/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectLogin from './selectors';
import {
  changeUsername,
  changePassword,
  loginRequest,
} from './actions';
import LoginBox from '../../components/LoginBox';


export class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LoginBox {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = selectLogin();

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onLoginSubmit: (username, password) => {
      dispatch(loginRequest({ username, password }));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
