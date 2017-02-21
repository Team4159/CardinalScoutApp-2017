import { connect } from 'react-redux';
import React, { Component } from 'react';
import { pop, push } from '../../actions/navActions';
import { resetStoredData } from '../../actions/dataActions';
import { Logs } from './Logs';
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash
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
