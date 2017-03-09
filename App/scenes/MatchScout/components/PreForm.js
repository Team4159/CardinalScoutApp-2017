import React, { Component, PropTypes } from 'react';
import { View,
         Text,
         TextInput,
         Alert,
         TouchableHighlight } from 'react-native';

import BigButton from '../../../components/BigButton';
import styles from './styles';

const PreForm = ({ onNextPress, push, onChangeText, match, team }) =>(
      <View style={styles.container}>
        <Text style={styles.text}>Match Number:</Text>
        <TextInput placeholder={'Ex. 69'} value={match} style={styles.textBox}
          onChangeText = {(text) => onChangeText(text, 'match') } keyboardType='numeric'/>
        <Text style={styles.text}>Team Number:</Text>
        <TextInput placeholder={'Ex. 4159'} value={team} style={styles.textBox}
          onChangeText = {(text) => onChangeText(text, 'team')} keyboardType='numeric'/>
        <BigButton onPress={() => {
          if(validInput(team, match))
          onNextPress();
          else {
            Alert.alert(
          'Invalid',
          'Please enter a valid match and/or team number.'
          );
          }
        }} text='Next' />
      </View>
)


const validInput = (team, match) =>{
  if( (isNaN(match) || isNaN(team))
  || (match === '' || team === '') ){
    return false;
  }
  return true;
}

export default PreForm;
