import React from 'react';
import { Text, View } from 'react-native';
import LongButton from '../../components/LongButton';
import { connect } from 'react-redux';
import { pop } from '../../actions/navActions';

const Logs = ({ pop }) =>(
  <View>
    <Text>Hello from Logs</Text>
    <LongButton  text='go back' onPress={() => pop()}/>
  </View>
)
function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    pop: () => dispatch(pop())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
