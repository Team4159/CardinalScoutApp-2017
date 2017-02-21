import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BigButton from '../../components/BigButton';
import QRCode from 'react-native-qrcode';
const commas = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = ""
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ch
  }
  return str;
}
export const Logs = ({ word ,reset, data, push }) =>(
  <View style={{padding:75}}>
    <Text>Hello from Logs</Text>
    <Text>{word}</Text>
    {data.map((d) => (
      <TouchableOpacity key={d.id}onPress={() => push({key:'Logs Data', data: d})}>
      <Text >{d.data.team}</Text>
    </TouchableOpacity>
  ))}
  </View>
)
export const DataContainer = ({ info }) =>(
  <View style={{paddingTop:100, alignItems:'center'}}>
    <Text>{commas(info.data, '\n')}</Text>
    <QRCode vale={commas(info.data, ' , ')} size={200}/>
  </View>
)
