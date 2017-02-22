import { connect } from 'react-redux';
import React, { Component } from 'react';
import { pop, push } from '../../../actions/navActions';
import { editData } from '../../../actions/dataActions';
import Data from '../components/Data';
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
} }

function mapDispatchToProps (dispatch) {
  return {
    editData: (newData, id) => dispatch(editData(newData, id)),
    pop: () => dispatch(pop())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)
