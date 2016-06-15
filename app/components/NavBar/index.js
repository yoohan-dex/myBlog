/**
*
* NavBar
*
*/

import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import styles from './styles.css';

class NavBar extends React.Component {

  render() {

    let navButton = this.props.loggedIn ? (
        <Nav pullRight>
          <NavItem onClick={this.props.logout}>Logout</NavItem>
        </Nav>
      
    ):(
        <Nav pullRight>
          <LinkContainer to='/register'><NavItem>register</NavItem></LinkContainer>
          <LinkContainer to='/login'><NavItem>login</NavItem></LinkContainer>
        </Nav>
        
      
    )

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
  }
    _logout () {
    this.props.dispatch(logout())
  }
}

export default NavBar;
