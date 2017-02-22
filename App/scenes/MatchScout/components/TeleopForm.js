import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native';
import SmallButton from '../../../components/SmallButton';
import BigButton from '../../../components/BigButton';
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
class TeleopForm extends Component {

  constructor(props) {
    super(props)
    this.state = {comments: ''}
    this.nextPress = this.nextPress.bind(this)
  }

  nextPress() {
    Alert.alert(
      'Comfirm information',
      display(this.props.data, '\n'),
      [
        {onPress: () => {this.props.submit({comments: this.state.comments})
                          this.props.onNextPress({key: 'Home'})},
        text: 'Submit'
      },
      {text: 'Cancel'}
      ]
    )

  }

  render() {
    return(
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.rowText}>Gears: {this.props.data.teleopGears}</Text>
          <View style={styles.row}>
            <SmallButton onPress={() => this.props.onPlusPress('gear', this.props.data)} text='+'/>
            <SmallButton text='-' onPress={() => this.props.onMinusPress('gear', this.props.data)}/>
          </View>

          <Text style={styles.rowText}>High Goals: {this.props.data.teleopBallsHigh}</Text>
          <View style={styles.row}>
            <SmallButton onPress={() => this.props.onPlusPress('ball high', this.props.data)} text='+'/>
            <SmallButton onPress={() => this.props.onMinusPress('ball high', this.props.data)} text='-'/>
          </View>
          <Text style={styles.rowText}>Low Goals: {this.props.data.teleopBallsLow}</Text>
          <View style={styles.row}>
            <SmallButton onPress={() => this.props.onPlusPress('ball low', this.props.data)} text='+'/>
            <SmallButton onPress={() => this.props.onMinusPress('ball low', this.props.data)} text='-'/>
          </View>

          <Text style={styles.rowText}>Touch Pad?</Text>
          <View style={styles.row}>
            <SmallButton text='T' style={this.props.data.reachTouchPad==='T' ? {backgroundColor:'gray'}:styles.counterButton } onPress={() => this.props.submit({reachTouchPad: 'T'})} disabled={this.props.data.reachTouchPad==='T'} />
            <SmallButton text='F'style={this.props.data.reachTouchPad==='F' ? {backgroundColor:'gray'} : styles.counterButton} onPress={() => this.props.submit({reachTouchPad: 'F'})} disabled={this.props.data.reachTouchPad==='F'}/>
          </View>

          <Text style={styles.rowText}>Climb?</Text>
          <View style={styles.row}>
            <SmallButton text='T'style={this.props.data.scoreTouchPad==='T' ? {backgroundColor:'gray'}:styles.counterButton } onPress={() => this.props.submit({scoreTouchPad: 'T'})} disabled={this.props.data.scoreTouchPad==='T'}/>
            <SmallButton text='F' style={this.props.data.scoreTouchPad==='F' ? {backgroundColor:'gray'} : styles.counterButton} onPress={() => this.props.submit({scoreTouchPad: 'F'})} disabled={!this.props.data.scoreTouchPad==='F'}/>
          </View>

          <Text style={styles.rowText}>Important comments</Text>
          <TextInput placeholder={'Ex. Died on field'} onChangeText={(text) => this.setState({comments: text})} style={styles.textBox}/>

          <BigButton onPress={() => this.nextPress()} text='Done' />

        </View>
      </ScrollView>
    )
  }
}

export default TeleopForm;
