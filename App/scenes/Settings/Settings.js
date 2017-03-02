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
          onPress={() => {alert(onPress, tempUID); tempUID=''}}
          text={'Save'}/>
          :
          <Text>You can only set your UID once</Text>
        }

      </View>
    )
}
const alert = (onPress, uid) => (
    Alert.alert(
      'Confirmation',
      uid,
      [
        {text: 'Cancel'},
        {text: 'Submit', onPress: () =>
              onPress(uid)
        }
      ]
    )
)
export default Settings;
