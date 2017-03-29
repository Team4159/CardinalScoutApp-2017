import { connect } from 'react-redux';
import React, { Component } from 'react';
import { pop, push } from '../../../actions/navActions';
import { resetStoredData } from '../../../actions/dataActions';
import { Logs } from '../components/Logs';
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
} }

function mapDispatchToProps (dispatch) {
  return {
    reset: () => dispatch(resetStoredData()),
    push: (data) => dispatch(push(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
