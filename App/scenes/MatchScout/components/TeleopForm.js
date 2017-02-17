import React, { Component } from 'react';
import Button from '../../../components/Button';
import { View, Text, TextInput } from 'react-native';
import LongButton from '../../../components/LongButton';
import styles from './styles';
class TeleopForm extends Component{
  constructor(props){
    super(props);
    this.onPlusPress = this.onPlusPress.bind(this)
    this.onMinusPress = this.onMinusPress.bind(this)
    this.onNextPress = this.onNextPress.bind(this)
  }

  onPlusPress(key){
    if(key === 'gear'){
    var gear = this.props.data.teleopGears + 1;
    this.props.submit({teleopGears: gear });
    }
    if(key === 'ball high'){
    var ball = this.props.data.teleopBallsHigh + 1;
    this.props.submit({teleopBallsHigh: ball});
    }
    if(key === 'ball low'){
    var ballL = this.props.data.teleopBallsLow + 1;
    this.props.submit({teleopBallsLow: ballL});
    }
  }
  onMinusPress(key){
    if(key === 'gear'){
    var gear = this.props.data.teleopGears - 1;
    if(gear >= 0){
    this.props.submit({teleopGears: gear });
    }
    }
    if(key === 'ball high'){
    var ball = this.props.data.teleopBallsHigh - 1;
    if(ball >= 0){
    this.props.submit({teleopBallsHigh: ball});
    }
    }
    if(key === 'ball low'){
    var ballL = this.props.data.teleopBallsLow - 1;
    if(ballL >= 0){
    this.props.submit({teleopBallsLow: ballL});
    }
    }
  }
  onNextPress(){
    this.props.csv()
    this.props.reset()
  }
  render(){
  return(
  <View style={styles.container}>
    <Text> Teleop Scouting </Text>
    <View style={styles.buttonContainer}>
      <Text> Gears </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('gear')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('gear')} />
      <Text>{this.props.data.teleopGears}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text> Balls High </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('ball high')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('ball high')} />
      <Text>{this.props.data.teleopBallsHigh}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text> Balls Low </Text>
      <Button  text={'+'} onPress={() => this.onPlusPress('ball low')}/>
      <Button text={'-'} onPress={() => this.onMinusPress('ball low')} />
      <Text>{this.props.data.teleopBallsLow}</Text>
    </View>

    <LongButton text={'Submit'} onPress={() => this.onNextPress()} />
  </View>
  )
  }
}
export default TeleopForm;
