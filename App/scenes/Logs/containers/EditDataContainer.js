import { connect } from 'react-redux';
import React, { Component } from 'react';
import { pop, push } from '../../../actions/navActions';
import { editData } from '../../../actions/dataActions';
import EditData from '../components/EditData';
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
} }

function mapDispatchToProps (dispatch) {
  return {
    editData: (newData, id) => dispatch(editData(newData, id)),
    pop: () => dispatch(pop()),
    push: (data) => dispatch(push(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditData)
