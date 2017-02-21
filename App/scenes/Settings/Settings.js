import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import BigButton from '../../components/BigButton';
import styles from './styles';
class Settings extends Component{
  state = { uid: '', press: 0}
  render(){
  const { onPress, uid } = this.props;
  const times = () => {
    if(this.state.press == 5){
      Alert.alert('you clicked 5 times', 'you get a prize')
    }else{
      this.setState({press: this.state.press + 1})
    }
  }
  return(
      <View style = {styles.container}>
        <TextInput style={styles.textBox} onChangeText={text => {this.setState({uid: text})}}/>
        {uid=='' ? <BigButton onPress={() => onPress(this.state.uid)} text={'Hello'}/>: <Text>RIP</Text>}
        <BigButton onPress={() => times()}/>
      </View>
    )
}
}
export default Settings;
