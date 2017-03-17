import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableHighlight, Linking } from 'react-native';
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

      <TouchableHighlight underlayColor='rgb(255,255,255)' style={{marginTop: 50}} onPress={() => openURL('https://www.github.com/Team4159/CardinalScout-2017')}>
        <Text style={{color:'#8b0000', fontSize:16}}>Click to open (source) in Github!</Text>
      </TouchableHighlight>

    </View>
  )
}

const openURL = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log('Don\'t know how to open URI: ' + url);
    }
  });
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
