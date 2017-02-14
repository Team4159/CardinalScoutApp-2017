import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import LongButton from '../../components/LongButton';
import styles from './styles';
class MatchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      match : '',
      team: ''
    }
  }
  render(){
  return(
  <View style={styles.container}>
    <Text> Enter team and match </Text>
    <TextInput style={styles.textBox} onChangeText = {(text) => this.setState({match: text}) }/>
    <TextInput style={styles.textBox} onChangeText = {(text) => this.setState({team: text}) }/>
    <LongButton  text={'submit'} onPress={() => this.props.submitPress()}/>
  </View>
  )
  }
}
export default MatchForm;
