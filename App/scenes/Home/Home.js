import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const Home = ({ push, stash }) =>(
  <View style={styles.container}>
    <TouchableHighlight style={styles.button} onPress={() => push({key: 'PreScout'})}>
      <Text style={styles.text}>Match Scout</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button} onPress={() => push({key: 'Logs'})}>
      <Text style={styles.text}>Logs</Text>
    </TouchableHighlight>
    <TouchableHighlight style={styles.button} onPress={() => push({key: 'Settings'})}>
      <Text style={styles.text}>Settings</Text>
    </TouchableHighlight>
  </View>
)
export default Home;
