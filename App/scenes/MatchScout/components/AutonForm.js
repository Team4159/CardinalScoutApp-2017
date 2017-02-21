import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Switch} from 'react-native';
import SmallButton from '../../../components/SmallButton';
import BigButton from '../../../components/BigButton';
import styles from './styles';

const AutonForm = ({ onPlusPress, onMinusPress, push, submit, data }) =>{
  return(
    <View style={styles.container}>

      <Text style={styles.rowText}>Gears: {data.autonGears}</Text>
      <View style={styles.row}>
        <SmallButton onPress={() => onPlusPress('gear', data)} text='+' />
        <SmallButton onPress={() => onMinusPress('gear', data)} text='-'/>
      </View>

      <Text style={styles.rowText}>High Goal: {data.autonBallsHigh}</Text>
      <View style={styles.row}>
        <SmallButton onPress={() => onPlusPress('ball high', data)} text='+' />
        <SmallButton onPress={() => onMinusPress('ball high', data)} text='-'/>
      </View>

      <Text style={styles.rowText}>Low Goal: {data.autonBallsLow}</Text>
      <View style={styles.row}>
        <SmallButton onPress={() => onPlusPress('ball low', data)} text='+' />
        <SmallButton onPress={() => onMinusPress('ball low', data)} text='-' />
      </View>

      <Text style={styles.rowText}>Cross</Text>
      <View style={styles.row}>
        <SmallButton text='T'style={data.cross ? {backgroundColor: 'gray'}:styles.counterButton } onPress={() => submit({cross: true})} disabled={data.cross}/>
        <SmallButton text='F' style={!data.cross ? {backgroundColor: 'gray'}: styles.counterButton} onPress={() => submit({cross: false})} disabled={!data.cross}/>
      </View>

      <BigButton text='Next' onPress={() => push({key: 'Teleop'})}/>
    </View>
  )
}
export default AutonForm;
