import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import BigButton from '../../components/BigButton';
import styles from './styles';
const Settings = ({ onPress, uid }) =>{
  var tempUID = '';
  return(
      <View style = {styles.container}>
        <Text>User ID</Text>
        <TextInput style={styles.textBox}
          placeholder={uid===''? 'Ex. John Smith => josm' : uid} maxLength={4}
          onChangeText={text => {tempUID = text}}
        />

        { uid==='' ? <BigButton
          onPress={() => {onPress(tempUID); tempUID=''}}
          text={'Save'}/>
          :
          <Text>You can only set your UID once</Text>
        }

      </View>
    )
}
export default Settings;
