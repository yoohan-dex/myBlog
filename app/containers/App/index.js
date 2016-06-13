/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';


import NavBar from '../../components/NavBar';
import RegisterBox from '../../components/RegisterBox';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);

  }
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>

        <NavBar/>
        
          <Grid>
            <Row>
              <Col md={12} xs={12}>
              
                {this.props.children}

              </Col>
            </Row>
          </Grid>
        




      </div>
    );
  }
}
