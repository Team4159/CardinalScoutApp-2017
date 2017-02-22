import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import QRCode from '../../../lib/react-native-qrcode';
import styles from './styles';
const csv = (d, uid, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = uid;
  for(var i = 0; i < names.length; i++){
    str += data[i] + ch
  }
  return str;
}

export const Logs = ({ reset, data, push, uid }) =>(
  <View style={styles.container}>
    {data.map((d) => (
      <View style={styles.row} key={d.id}>
        <Text>Match: {d.data.match} Team: {d.data.team}</Text>
        <SmallButton text='QR' onPress={() => push({key:'QR', data: d, uid: uid})}/>
        <SmallButton text='E' onPress={() => push({key:'Data', data: d})}/>
      </View>
    ))}
  </View>
)


export const QR = ( {info, uid} ) => (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <QRCode size={250} value={csv(info.data,uid,',')} />
      </View>
    )
