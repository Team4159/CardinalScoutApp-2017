import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Switch} from 'react-native';
import Button from '../../../components/Button';
import LongButton from '../../../components/LongButton';
import styles from './styles';

const AutonForm = ({ onPlusPress, onMinusPress, push, submit, data }) =>{
  return(
    <View style={styles.container}>

      <Text style={styles.rowText}>Gears: {data.autonGears}</Text>
      <View style={styles.row}>
        <Button onPress={() => onPlusPress('gear', data)} text='+' />
        <Button onPress={() => onMinusPress('gear', data)} text='-'/>
      </View>

      <Text style={styles.rowText}>High Goal: {data.autonBallsHigh}</Text>
      <View style={styles.row}>
        <Button onPress={() => onPlusPress('ball high', data)} text='+' />
        <Button onPress={() => onMinusPress('ball high', data)} text='-'/>
      </View>

      <Text style={styles.rowText}>Low Goal: {data.autonBallsLow}</Text>
      <View style={styles.row}>
        <Button onPress={() => onPlusPress('ball low', data)} text='+' />
        <Button onPress={() => onMinusPress('ball low', data)} text='-' />
      </View>

      <Text style={styles.rowText}>Cross</Text>
      <View style={styles.row}>
        <TouchableHighlight style={data.cross ? styles.disabledButton:styles.counterButton } onPress={() => submit({cross: true})} disabled={data.cross}>
          <Text style={styles.counterText}>T</Text>
        </TouchableHighlight>
        <TouchableHighlight style={!data.cross ? styles.disabledButton: styles.counterButton} onPress={() => submit({cross: false})} disabled={!data.cross}>
          <Text style={styles.counterText}>F</Text>
        </TouchableHighlight>
      </View>

      <TouchableHighlight style={styles.button} onPress={() => push({key: 'Teleop'})}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableHighlight>
    </View>
  )
}
export default AutonForm;
