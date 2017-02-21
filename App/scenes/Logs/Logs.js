import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BigButton from '../../components/BigButton';
import SmallButton from '../../components/SmallButton';
import QRCode from '../../lib/react-native-qrcode';
import styles from './styles';

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
      <View style={styles.row}>
        <Text>Match: {d.data.match} Team: {d.data.team}</Text>
        <SmallButton style={{}} text='QR' key={d.id} onPress={() => push({key:'QR', data: d})}/>
        <SmallButton text='E'/>
        <SmallButton text='X'/>
      </View>
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
