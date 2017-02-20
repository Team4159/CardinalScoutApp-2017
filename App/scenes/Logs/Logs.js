import React from 'react';
import { Text, View } from 'react-native';
import LongButton from '../../components/LongButton';

const Logs = ({ reset, data }) =>(
  <View style={{padding: 75}}>
    <Text>Hello from Logs</Text>
    <LongButton  text='go back' onPress={() => reset()}/>
    {data.map((d) => (<Text key={d.id}>{d.data.team}</Text>))}
  </View>
)
export default Logs;
