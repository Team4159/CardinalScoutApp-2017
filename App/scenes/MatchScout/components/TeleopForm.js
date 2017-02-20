import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
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
      <ScrollView style={styles.container}>

        <Text style={styles.rowText}>Gears: {this.props.data.teleopGears}</Text>
        <View style={styles.row}>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onPlusPress('gear', this.props.data)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onMinusPress('gear', this.props.data)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.rowText}>High Goals: {this.props.data.teleopBallsHigh}</Text>
        <View style={styles.row}>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onPlusPress('ball high', this.props.data)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onMinusPress('ball high', this.props.data)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.rowText}>Low Goals: {this.props.data.teleopBallsLow}</Text>
        <View style={styles.row}>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onPlusPress('ball low', this.props.data)}>
            <Text style={styles.counterText}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.counterButton} onPress={() => this.props.onMinusPress('ball low', this.props.data)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.rowText}>Touch Pad?</Text>
        <View style={styles.row}>
          <TouchableHighlight style={this.props.data.reachTouchPad ? styles.disabledButton:styles.counterButton } onPress={() => this.props.submit({reachTouchPad: true})} disabled={this.props.data.reachTouchPad}>
            <Text style={styles.counterText}>T</Text>
          </TouchableHighlight>
          <TouchableHighlight style={!this.props.data.reachTouchPad ? styles.disabledButton : styles.counterButton} onPress={() => this.props.submit({reachTouchPad: false})} disabled={!this.props.data.reachTouchPad}>
            <Text style={styles.counterText}>F</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.rowText}>Climb?</Text>
        <View style={styles.row}>
          <TouchableHighlight style={this.props.data.scoreTouchPad ? styles.disabledButton:styles.counterButton } onPress={() => this.props.submit({reachTouchPad: true})} disabled={this.props.data.reachTouchPad}>
            <Text style={styles.counterText}>T</Text>
          </TouchableHighlight>
          <TouchableHighlight style={!this.props.data.scoreTouchPad ? styles.disabledButton : styles.counterButton} onPress={() => this.props.submit({reachTouchPad: false})} disabled={!this.props.data.reachTouchPad}>
            <Text style={styles.counterText}>F</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.rowText}>Important comments</Text>
        <TextInput placeholder={'Ex. Died on field'} onChangeText={(text) => this.setState({comments: text})} style={styles.textBox}/>

        <TouchableHighlight style={styles.button} onPress={() => this.nextPress()}>
          <Text style={styles.buttonText}>Done</Text>
        </TouchableHighlight>

      </ScrollView>
    )
  }
}

export default TeleopForm;
