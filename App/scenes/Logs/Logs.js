import React from 'react';
import { Text, View, TouchableOpacity, ListView } from 'react-native';
import LongButton from '../../components/LongButton';

const Logs = ({ reset, data }) =>(
  <View style={{padding: 75}}>
    <Text>Hello from Logs</Text>
    <LongButton  text='go back' onPress={() => reset()}/>
    {data.map((d) => (
      <TouchableOpacity key={d.id} style={{borderColor: 'gray', height:50}}>
        <Text>{"team " + d.data.team + " match " + d.data.match}</Text>
      </TouchableOpacity>
    ))}
  </View>
)
export default Logs;
