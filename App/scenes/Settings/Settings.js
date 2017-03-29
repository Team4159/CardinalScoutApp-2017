import React, { Component } from 'react';
import { View, Text, TextInput, Alert, TouchableHighlight, Linking } from 'react-native';
import BigButton from '../../components/BigButton';
import styles from './styles';

const Settings = ({ onPress, uid }) =>{
  var tempUID = '';
  return(
    <View style = {styles.container}>
      <Text style={{fontSize:16}}>User ID</Text>
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

      <Text style={{marginTop:30,fontSize:16}}>Quick Links:</Text>
      <TouchableHighlight underlayColor='rgb(255,255,255)' style={{marginTop: 10}} onPress={() => openURL('https://www.github.com/Team4159/CardinalScout-2017')}>
        <Text style={{color:'#8b0000', fontSize:16}}>CardinalScout GitHub repo</Text>
      </TouchableHighlight>
      <TouchableHighlight underlayColor='rgb(255,255,255)' style={{marginTop: 10}} onPress={() => openURL('https://github.com/Team4159/ScoutingBackend')}>
        <Text style={{color:'#8b0000', fontSize:16}}>Team 4159's QR scanning desktop app</Text>
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
