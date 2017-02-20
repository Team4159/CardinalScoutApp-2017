import React, { Component } from 'react';
import Button from '../../../components/Button';
import { View, Text, TextInput } from 'react-native';
import LongButton from '../../../components/LongButton';
import styles from './styles';
const AutonForm = ({ onPlusPress, onMinusPress, push, submit, data }) =>{
  return(
    <View style={styles.container}>
      <Text> Autonomous Scouting </Text>
      <View style={styles.buttonContainer}>
        <Text> Gears </Text>
        <Button  text={'+'} onPress={() => onPlusPress('gear', data)}/>
        <Button text={'-'} onPress={() => onMinusPress('gear', data)} />
        <Text>{data.autonGears}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text> Balls High </Text>
        <Button  text={'+'} onPress={() => onPlusPress('ball high', data)}/>
        <Button text={'-'} onPress={() => onMinusPress('ball high', data)} />
        <Text>{data.autonBallsHigh}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text> Balls Low </Text>
        <Button  text={'+'} onPress={() => onPlusPress('ball low', data)}/>
        <Button text={'-'} onPress={() => onMinusPress('ball low', data)} />
        <Text>{data.autonBallsLow}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>cross?</Text>
        <Button text={'cross'} style={data.cross ? styles.disabledButtons:undefined } onPress={() => submit({cross: true})} disabled={data.cross}/>
        <Button text={'not cross'} style={!data.cross ? styles.disabledButtons:undefined} onPress={() => submit({cross: false})} disabled={!data.cross}/>
      </View>
      
      <LongButton text={'Next'} onPress={() => push({key: 'TeleopForm'})}/>
    </View>
  )
}
export default AutonForm;
