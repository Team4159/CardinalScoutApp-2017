import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Switch} from 'react-native';
import styles from './styles';

const AutonForm = ({ onPlusPress, onMinusPress, push, submit, data }) =>{
  return(
    <View style={styles.container}>

      <Text style={styles.rowText}>Gears: {data.autonGears}</Text>
      <View style={styles.row}>
        <TouchableHighlight style={styles.counterButton} onPress={() => onPlusPress('gear', data)}>
          <Text style={styles.counterText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.counterButton} onPress={() => onMinusPress('gear', data)}>
          <Text style={styles.counterText}>-</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.rowText}>High Goal: {data.autonBallsHigh}</Text>
      <View style={styles.row}>
        <TouchableHighlight style={styles.counterButton} onPress={() => onPlusPress('ball high', data)}>
          <Text style={styles.counterText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.counterButton} onPress={() => onMinusPress('ball high', data)}>
          <Text style={styles.counterText}>-</Text>
        </TouchableHighlight>
      </View>

      <Text style={styles.rowText}>Low Goal: {data.autonBallsLow}</Text>
      <View style={styles.row}>
        <TouchableHighlight style={styles.counterButton} onPress={() => onPlusPress('ball low', data)}>
          <Text style={styles.counterText}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.counterButton} onPress={() => onMinusPress('ball low', data)}>
          <Text style={styles.counterText}>-</Text>
        </TouchableHighlight>
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
