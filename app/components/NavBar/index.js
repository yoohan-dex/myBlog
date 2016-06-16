/**
*
* NavBar
*
*/

import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, FormGroup, FormControl } from 'react-bootstrap';


const NavBar = (props) => {
  let navButton = props.loggedIn ? (
    <Nav pullRight>
      <NavItem onClick={props.logout}>LOGOUT</NavItem>
    </Nav>
  ) : (
    <Nav pullRight>
      <LinkContainer to="/register"><NavItem>REGISTER</NavItem></LinkContainer>
      <LinkContainer to="/login"><NavItem>LOGIN</NavItem></LinkContainer>
    </Nav>
  );
  return (
    <Navbar>
      <Navbar.Header>
        <LinkContainer to="/">
          <Navbar.Brand>
            MyBlog
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/discovery"><NavItem>DISCOVERY</NavItem></LinkContainer>
          <NavItem eventKey={2} href="#">LAYOUT</NavItem>
        </Nav>
        {navButton}
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  logout: React.PropTypes.func.isRequired,
};

export default NavBar;
