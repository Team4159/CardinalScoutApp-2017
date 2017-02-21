import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Alert, TouchableHighlight } from 'react-native';
import BigButton from '../../../components/BigButton';
import styles from './styles';

class PreForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      match : '',
      team: ''
    }
    this.onSubmitPress = this.onSubmitPress.bind(this)
  }

  onSubmitPress() {
    if((isNaN(this.state.match) || isNaN(this.state.team)) || (this.state.match === '' || this.state.team === '')){
      Alert.alert(
        'Invalid',
        'Please enter a valid match and/or team number.'
      )
    } else {
      this.props.submit({match: this.state.match});
      this.props.submit({team: this.state.team});
      this.props.push({key: 'Autonomous'});
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Match Number:</Text>
        <TextInput placeholder={'Ex. 69'} style={styles.textBox} onChangeText = {(text) => this.setState({match: text}) }/>
        <Text style={styles.text}>Team Number:</Text>
        <TextInput placeholder={'Ex. 4159'} style={styles.textBox} onChangeText = {(text) => this.setState({team: text}) }/>
        <BigButton onPress={() => this.onSubmitPress()} text='next' />
      </View>
    )
  }
}

PreForm.propTypes = {
  push: PropTypes.func.isRequired,
}

export default PreForm;
