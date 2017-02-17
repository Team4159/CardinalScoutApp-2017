import React, { Component } from 'react';
import Button from '../../../components/Button';
import { View, Text, TextInput } from 'react-native';
import LongButton from '../../../components/LongButton';
import styles from './styles';
class AutonForm extends Component{
  constructor(props){
    super(props);
    this.onPlusPress = this.onPlusPress.bind(this)
    this.onMinusPress = this.onMinusPress.bind(this)
  }
  onPlusPress(key){
    if(key === 'gear'){
    var gear = this.props.data.autonGears + 1;
    this.props.submit({autonGears: gear });
    }
    if(key === 'ball high'){
    var ball = this.props.data.autonBallsHigh + 1;
    this.props.submit({autonBallsHigh: ball});
    }
    if(key === 'ball low'){
    var ballL = this.props.data.autonBallsLow + 1;
    this.props.submit({autonBallsLow: ballL});
    }

  }
  onMinusPress(key){
    if(key === 'gear'){
    var gear = this.props.data.autonGears - 1;
    if(gear >= 0){
    this.props.submit({autonGears: gear });
    }
    }
    if(key === 'ball high'){
    var ball = this.props.data.autonBallsHigh - 1;
    if(ball >= 0){
    this.props.submit({autonBallsHigh: ball});
    }
    }
    if(key === 'ball low'){
    var ballL = this.props.data.autonBallsLow - 1;
    if(ballL >= 0){
    this.props.submit({autonBallsLow: ballL});
    }
    }

  }
  render(){
  return(
  <View style={styles.container}>
    <Text> Autonomous Scouting </Text>
    <View style={styles.buttonContainer}>
      <Text> Gears </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('gear')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('gear')} />
      <Text>{this.props.data.autonGears}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text> Balls High </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('ball high')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('ball high')} />
      <Text>{this.props.data.autonBallsHigh}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text> Balls Low </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('ball low')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('ball low')} />
      <Text>{this.props.data.autonBallsLow}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text>cross?</Text>
      <Button text={'cross'} style={this.props.data.cross ? styles.disabledButtons:undefined } onPress={() => this.props.submit({cross: true})} disabled={this.props.data.cross}/>
      <Button text={'not cross'} style={!this.props.data.cross ? styles.disabledButtons:undefined} onPress={() => this.props.submit({cross: false})} disabled={!this.props.data.cross}/>
    </View>
    <LongButton text={'Next'} onPress={() => this.props.push({key: 'TeleopForm'})}/>
  </View>
  )
  }
}
export default AutonForm;
