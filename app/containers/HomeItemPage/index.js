/*
 *
 * HomeItemPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHomeItemPage from './selectors';

import LeftofHome from '../../components/LeftofHome';
import ItemofHome from '../../components/ItemofHome';


export class HomeItemPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <LeftofHome>
          <h3>latest feeds</h3>
          <hr />
          <ItemofHome id="y" />
          <ItemofHome id="yo" />
          <ItemofHome id="yoo" />
          <ItemofHome id="yooo" />
          <ItemofHome id="yoooo" />
        </LeftofHome>
      </div>
    );
  }
}

const mapStateToProps = selectHomeItemPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeItemPage);
