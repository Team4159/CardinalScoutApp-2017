import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import BigButton from '../../../components/BigButton';
import styles from './styles';
class MatchForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      match : '',
      team: ''
    }
    this.onSubmitPress = this.onSubmitPress.bind(this)
  }
  onSubmitPress(){
    if((isNaN(this.state.match) || isNaN(this.state.team)) || (this.state.match === '' || this.state.team === '')){
      Alert.alert(
        'Invalid match or team number',
        'Please enter a valid match and team number'
      )
    }else{
    this.props.submit({match: this.state.match});
    this.props.submit({team: this.state.team});
    this.props.push({key: 'AutonForm'});
    }
  }
  render(){
  return(
    <View style={styles.container}>
      <Text> Enter team and match </Text>
      <TextInput placeholder={'Match number'} style={styles.textBox} onChangeText = {(text) => this.setState({match: text}) }/>
      <TextInput placeholder={'Team number'} style={styles.textBox} onChangeText = {(text) => this.setState({team: text}) }/>
      <BigButton  text={'submit'} onPress={() => this.onSubmitPress()}/>
    </View>
  )
  }
}
MatchForm.propTypes = {
  push: PropTypes.func.isRequired,
}
export default MatchForm;
