import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import SmallButton from '../../../components/SmallButton';
import BigButton from '../../../components/BigButton';
import styles from './styles';

class TeleopForm extends Component {

  constructor(props) {
    super(props)
    this.state = {comments: ''}
    this.nextPress = this.nextPress.bind(this)
  }

  nextPress() {
    this.props.submit({comments: this.state.comments})
    this.props.onNextPress({key: 'Home'})
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
            <SmallButton text='T' style={this.props.data.reachTouchPad ? styles.disabledButton:styles.counterButton } onPress={() => this.props.submit({reachTouchPad: true})} disabled={this.props.data.reachTouchPad} />
            <SmallButton text='F'style={!this.props.data.reachTouchPad ? styles.disabledButton : styles.counterButton} onPress={() => this.props.submit({reachTouchPad: false})} disabled={!this.props.data.reachTouchPad}/>
          </View>

          <Text style={styles.rowText}>Climb?</Text>
          <View style={styles.row}>
            <SmallButton text='T'style={this.props.data.scoreTouchPad ? styles.disabledButton:styles.counterButton } onPress={() => this.props.submit({scoreTouchPad: true})} disabled={this.props.data.scoreTouchPad}/>
            <SmallButton text='F' style={!this.props.data.scoreTouchPad ? styles.disabledButton : styles.counterButton} onPress={() => this.props.submit({scoreTouchPad: false})} disabled={!this.props.data.scoreTouchPad}/>
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
