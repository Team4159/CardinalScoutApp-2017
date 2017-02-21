import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import BigButton from '../../components/BigButton';
import styles from './styles';

const Home = ({ push, stash }) =>(
  <View style={styles.container}>
    <BigButton onPress={() => push({key: 'Pre Match'})} style={{height:60}} text='Match Scout' />
    <BigButton onPress={() => push({key: 'Logs'})} style={{ height:60}} text='Logs'/>
    <BigButton onPress={() => push({key: 'Settings'})} style={{height:60}} text='Settings' />
  </View>
)
export default Home;
