import React, { Component } from 'react';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         ScrollView,
         Alert } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';
import { display, dataToRender } from '../../../config/globalFunctions';


const EditData = ({ data, info, editData, newData, onSubmitPress }) =>{
  var d = dataToRender(data, info);
  return(
      <ScrollView style={styles.container}>
        {
        Object.keys(newData).map((key) =>
        <View style={styles.row} key={key}>
            <Text style={styles.text}>{key}:  </Text>
            <TextInput
              style={styles.textBox}
              value={newData[key].toString()}
              onChangeText={(text) => editData({[key]: text}, info)}
            />
        </View>
      )
      }
      <BigButton text='submit' onPress={() => onSubmitPress()}/>
    </ScrollView>
  )
}
const onChangeText = (text, data, key) => {
  return Object.assign({}, data, {[key]: text})
}
export default EditData;
