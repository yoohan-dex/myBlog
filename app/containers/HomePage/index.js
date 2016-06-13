/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Router, Route, } from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';


import NavBar from '../../components/NavBar';

import LeftofHome from '../../components/LeftofHome';
import JumbotronofHome from '../../components/JumbotronofHome';
import ItemofHome from '../../components/ItemofHome';
import RightofHome from '../../components/RightofHome';


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
         <LeftofHome>
            <h4>latest feed</h4>
            <hr/>
            {console.log(this.props.posts)}
            <ItemofHome _id='hoo'/>
            <ItemofHome _id='hooo'/>
         </LeftofHome>     
    );
  }
}
