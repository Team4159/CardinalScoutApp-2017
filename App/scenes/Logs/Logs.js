import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BigButton from '../../components/BigButton';
import QRCode from '../../lib/react-native-qrcode';

const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = "";
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ch
  }
  return str;
}

const csv = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = "";
  for(var i = 0; i < names.length; i++){
    str += data[i] + ch
  }
  return str;
}

export const Logs = ({ word ,reset, data, push }) =>(
  <View style={{padding: 75}}>
    <Text>{word}</Text>
    {data.map((d) => (
      <TouchableOpacity key={d.id} onPress={() => push({key:'QR', data: d})}>
      <Text>Match: {d.data.match} Team: {d.data.team}</Text>
    </TouchableOpacity>
  ))}
  </View>
)

export class DataContainer extends Component{
  render() {
    const { info } = this.props
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <QRCode size={250} value={csv(info.data, ',')} />
      </View>
    )
  }
}
