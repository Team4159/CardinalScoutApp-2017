import React from 'react';
import { Text, View } from 'react-native';
import BigButton from '../../components/BigButton';

const Logs = ({ reset, data }) =>(
  <View>
    <Text>Hello from Logs</Text>
    <BigButton text='go back' onPress={() => reset()}/>
    {data.map((d) => (<Text key={d.id}>{d.data.team}</Text>))}
  </View>
)
export default Logs;
