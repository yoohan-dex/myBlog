/*
 *
 * Register
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectRegister from './selectors';
import { changeUsername } from './actions';
import RegisterBox from '../../components/RegisterBox'
export class Register extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <RegisterBox onUserChange={this.props.onChangeUsername}/>
      </div>
    );
  }
}

const mapStateToProps = selectRegister();

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),

    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
