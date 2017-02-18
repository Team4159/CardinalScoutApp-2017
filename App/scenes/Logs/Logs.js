import React from 'react';
import { Text, View } from 'react-native';
import LongButton from '../../components/LongButton';
import { connect } from 'react-redux';
import { pop } from '../../actions/navActions';
import { resetStoredData } from '../../actions/dataActions';

const Logs = ({ reset }) =>(
  <View>
    <Text>Hello from Logs</Text>
    <LongButton  text='go back' onPress={() => reset()}/>
  </View>
)
function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    reset: () => dispatch(resetStoredData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
