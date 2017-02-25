import React, { Component } from 'react';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         ListView,
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
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
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
      dataSource: ds.cloneWithRows(Object.keys(this.props.info.data))
    }
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
  renderRow(key) {
    return(
      <View>
        <Text style={{fontSize: 10}}>{key}:</Text>

                <TextInput
                  style={styles.textBox}
                  onChangeText={(text) => this.changeText(text, key)}
                  defaultValue={this.state[key] === 0 ?
                     '0' : (this.state[key] || "").toString()}
                  renderSeparator={(sectionId, rowId) =>
                    <View key={rowId} style={styles.separator} />}

                />
      </View>
    )
  }
    render() {
    const { info, editData } = this.props;
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(d) => this.renderRow(d)}
        style={{paddingTop: 65}}
      />
    )
  }
}
