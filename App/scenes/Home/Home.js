import React from 'react';
import {View, Text} from 'react-native';
import LongButton from '../../components/LongButton';
import styles from './styles';


const Home = ({ push, stash }) =>(
  <View style={styles.container}>
    <Text style = {styles.text}>Cardinal Scout App</Text>
    <LongButton text='Match Scout' onPress={() => push({key: 'MatchScout'})}/>
    <LongButton text='Logs' onPress={() => push({key: 'Logs'})}/>
    <LongButton text='Settings' onPress={() => push({key: 'Settings'})}/>
  </View>
)
export default Home;
