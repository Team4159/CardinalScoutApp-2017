import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         ListView,
         Alert } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';
import { dataKeys, display, dataToRender } from '../../../config/globalFunctions';

const newD = (data) =>{
  var newData = Object.assign({}, data);
  delete newData['dataSource'];
  return newData;
}
class EditData extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const data = dataToRender(this.props.data ,this.props.info);
    this.state = {
      match: data.match,
      team: data.team,
      autonGears: data.autonGears,
      autonBallsLow: data.autonBallsLow,
      autonBallsHigh : data.autonBallsHigh,
      cross: data.cross,
      teleopGears: data.teleopGears,
      teleopBallsHigh: data.teleopBallsHigh,
      teleopBallsLow: data.teleopBallsLow,
      reachTouchPad: data.reachTouchPad,
      scoreTouchPad: data.scoreTouchPad,
      robotDeadTime: data.robotDeadTime,
      comments: data.comments,
      dataSource: ds.cloneWithRows(dataKeys(Object.keys(data)))
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
            this.props.editData(newD(this.state), this.props.info);
            this.props.pop();
            },
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
      <View style={styles.row}>
        <Text style={styles.text}>{key}:  </Text>
                <TextInput
                  style={styles.textBox}
                  onChangeText={(text) => this.changeText(text, key)}
                  defaultValue={this.state[key] === 0 ?
                     '0' : (this.state[key] || "").toString()}
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
        renderSeparator={(sectionId, rowId) =>
          <View key={rowId} style={styles.separator} />}
        renderFooter={() => (
          <View style={styles.contain}>
            <BigButton onPress={() => this.submitChanges()} text='Next' />
          </View>
        )}
      />
    )
  }
}
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
  }
}
export default connect(
  mapStateToProps
)(EditData)
