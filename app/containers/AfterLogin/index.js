/*
 *
 * AfterLogin
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectAfterLogin from './selectors';

export class AfterLogin extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1>You can't reach this page unless your have loggined!!</h1>
      </div>
    );
  }
}

const mapStateToProps = selectAfterLogin();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AfterLogin);
