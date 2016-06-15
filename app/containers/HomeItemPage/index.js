/*
 *
 * HomeItemPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectHomeItemPage from './selectors';

import LeftofHome from '../../components/LeftofHome';
import JumbotronofHome from '../../components/JumbotronofHome';
import ItemofHome from '../../components/ItemofHome';
import RightofHome from '../../components/RightofHome';

export class HomeItemPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <LeftofHome>
        <ItemofHome _id="y"/>
        <ItemofHome _id="yo"/>
        <ItemofHome _id="yoo"/>
        <ItemofHome _id="yooo"/>
        <ItemofHome _id="yoooo"/>
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
