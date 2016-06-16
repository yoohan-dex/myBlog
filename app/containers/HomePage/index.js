/*
 *
 * HomePage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHomePage from './selectors';

import { Grid, Row, Col } from 'react-bootstrap';
import NavBar from '../../components/NavBar';

import { logout } from './actions';
export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar loggedIn={this.props.loggedIn} logout={this.props.logout} />
        <Grid>
          <Row>
            <Col md={12} sm={12} xs={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = selectHomePage();

HomePage.propTypes = {
  children: React.PropTypes.node.isRequired,
  loggedIn: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
