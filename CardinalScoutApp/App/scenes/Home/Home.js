import React from 'react';
import {View, Text} from 'react-native';
import LongButton from '../../Components/LongButton';
import styles from './styles';
import { connect } from 'react-redux';
import { push } from '../../Actions/navActions';


const Home = ({ push }) =>(
  <View style={styles.container}>
    <Text style = {styles.text}>Cardinal Scout App</Text>
    <LongButton text='Match Scout'/>
    <LongButton text='Logs' onPress={() => push({key: 'Logs'})}/>
    <LongButton text='Settings'/>
  </View>
)
function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
