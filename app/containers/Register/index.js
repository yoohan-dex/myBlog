/*
 *
 * Register
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { authSelector } from '../HomePage/selectors';

import {
  changeUsername,
  changePassword,
  changePassword2,
  changeEmailaddress,
  registerRequest,
} from '../HomePage/actions';
import RegisterBox from '../../components/RegisterBox';
export class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <RegisterBox {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = authSelector();

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onChangePassword2: (evt) => dispatch(changePassword2(evt.target.value)),
    onChangeEmailaddress: (evt) => dispatch(changeEmailaddress(evt.target.value)),
    onRegiterSubmit: (username, emailaddress, password) => {
      dispatch(registerRequest({ username, emailaddress, password }));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
