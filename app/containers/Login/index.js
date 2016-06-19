/*
 *
 * Login
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { authSelector } from '../HomePage/selectors';
import {
  changeUsername,
  changePassword,
  loginRequest,
} from '../HomePage/actions';
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

const mapStateToProps = authSelector();

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
