import React, { Component } from 'react';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         Switch,
         ScrollView,
         Alert } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { display, dataToRender } from '../../../config/globalFunctions';


const EditData = ({ data, info, editData, onSubmitPress }) =>{
  return(
      <ScrollView style={styles.container}>
        {
        Object.keys(data).map((key) =>{
          if(key === 'cross' || key === 'reachTouchPad' || key === 'climb'){
            return(
              <View key={key} style={styles.row}>
                <Text style={styles.text}>{key} </Text>
                <Switch
                  onValueChange = {(value) =>{value ? editData({[key]:'T'}) : editData({[key]:'F'})}}
                  value={data[ key ] === 'T'}
                />
              </View>
            )
          }
          if(key === 'comments'){
            return (
              <View style={styles.row} key={key}>
                <Text style={styles.text}>{key}:  </Text>
                <TextInput
                  style={styles.textBox}
                  value={data[key].toString()}
                  onChangeText={(text) => editData({[key]: text}, info)}
                />
              </View>
            )
          }
          return(
          <View style={styles.row} key={key}>
              <Text style={styles.text}>{key}:  </Text>
              <TextInput
                 keyboardType={'numeric'}
                style={styles.textBox}
                value={data[key].toString()}
                onChangeText={(text) => editData({[key]: text}, info)}
              />

          </View>
          )
        }
      )
      }
      <KeyboardSpacer/>
      <View style={{alignItems:'center'}}>
        <BigButton text='Save' onPress={() => onSubmitPress()}/>
      </View>
    </ScrollView>
  )
}
const onChangeText = (text, data, key) => {
  return Object.assign({}, data, {[key]: text})
}
export default EditData;
