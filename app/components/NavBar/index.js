/**
*
* NavBar
*
*/

import React from 'react';

import {LinkContainer} from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import styles from './styles.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <LinkContainer to='/'>
            <Navbar.Brand>
              MyBlog
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/register"><NavItem>DISCOVERY</NavItem></LinkContainer>
            <NavItem eventKey={2} href="#">LAYOUT</NavItem>
            
          </Nav>

          <Nav pullRight>
            <LinkContainer to='/about'><NavItem>about</NavItem></LinkContainer>
            <LinkContainer to='/logino'><NavItem>logino</NavItem></LinkContainer>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}

          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
