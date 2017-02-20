import React, { Component } from 'react';
import Button from '../../../components/Button';
import { View, Text, TextInput } from 'react-native';
import LongButton from '../../../components/LongButton';
import styles from './styles';
class TeleopForm extends Component {
  constructor(props){
    super(props)
    this.state = {comments: ''}
    this.nextPress = this.nextPress.bind(this)
  }
  nextPress(){
    this.props.submit({comments: this.state.comments})
    this.props.onNextPress()
  }
  render(){
  return(
    <View style={styles.container}>
      <Text> Teleop Scouting </Text>

      <View style={styles.buttonContainer}>
        <Text> Gears </Text>
        <Button  text={'+'} onPress={() => this.props.onPlusPress('gear', this.props.data)}/>
        <Button text={'-'} onPress={() => this.props.onMinusPress('gear', this.props.data)} />
        <Text>{this.props.data.teleopGears}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text> Balls High </Text>
        <Button  text={'+'} onPress={() => this.props.onPlusPress('ball high', this.props.data)}/>
        <Button text={'-'} onPress={() => this.props.onMinusPress('ball high', this.props.data)} />
        <Text>{this.props.data.teleopBallsHigh}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text> Balls Low </Text>
        <Button  text={'+'} onPress={() => this.props.onPlusPress('ball low', this.props.data)}/>
        <Button text={'-'} onPress={() => this.props.onMinusPress('ball low', this.props.data)} />
        <Text>{this.props.data.teleopBallsLow}</Text>
        
      </View>
      <TextInput placeholder={'Additional comments you may have on the robot'} onChangeText={(text) => this.setState({comments: text})} style={styles.textBox}/>
      <LongButton text={'Submit'} onPress={() => this.nextPress()} />
    </View>
  )
}
}
export default TeleopForm;
