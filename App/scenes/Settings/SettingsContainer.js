import React from 'react';
import { connect } from 'react-redux';
import { setUID } from '../../actions/dataActions';
import Settings from './Settings';

const mapStateToProps = (state) => ({uid: state.data.storedData.uid});
const mapDispatchToProps = (dispatch) => ({
  onPress: (uid) => dispatch(setUID(uid)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
