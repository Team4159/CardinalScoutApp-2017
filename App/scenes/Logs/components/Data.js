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
const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = "";
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ch
  }
  return str;
}
// this.setState({key : text})
export default class Data extends Component{
  state = {
    match: this.props.info.data.match,
    team: this.props.info.data.team,
    autonGears: this.props.info.data.autonGears,
    autonBallsLow: this.props.info.data.autonBallsLow,
    autonBallsHigh : this.props.info.data.autonBallsHigh,
    cross: this.props.info.data.cross,
    teleopGears: this.props.info.data.teleopGears,
    teleopBallsHigh: this.props.info.data.teleopBallsHigh,
    teleopBallsLow: this.props.info.data.teleopBallsLow,
    reachTouchPad: this.props.info.data.reachTouchPad,
    scoreTouchPad: this.props.info.data.scoreTouchPad,
    robotDeadTime: this.props.info.data.robotDeadTime,
    comments: this.props.info.data.comments,
  }
  changeText(text, key){
    var newState = {};
    newState[key] = text;
    this.setState(newState);
  }
  submitChanges(){
    Alert.alert(
      'Make sure data is correct',
      display(this.state, ', '),
      [
        {
          onPress: () => {
            this.props.editData(this.state, this.props.info.id);
            this.props.pop()},
          text: 'Submit'
        },
        {
          text: 'Cancel'
        }
      ]
    )
  }
    render() {
    const { info, editData } = this.props;
    return(
      <ScrollView >
        <View style={{paddingTop: 75, flex:1}}>
          {Object.keys(this.state).map(
            (key) => (
              <View key={key} style={styles.row}>
                <Text style={{alignSelf:'flex-start'}}>{key}:</Text>
                <TextInput
                  style={styles.textBox}
                  onChangeText={(text) => this.changeText(text, key)}
                  defaultValue={this.state[key] === 0 ?
                     '0' : (this.state[key] || "").toString()}
                />
              </View>
              )
          )}
          <BigButton onPress={() => this.submitChanges()} />
        </View>
      </ScrollView>
    )
  }
}
