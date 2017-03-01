import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import QRCode from '../../../lib/react-native-qrcode';
import styles from './styles';
import { csv } from '../../../config/globalFunctions';


export const Logs = ({ data, push }) => (
  <ScrollView style={styles.container}>
      {
        data.map((d) => (
          <TouchableHighlight style={styles.row}
            onPress={() => push({
              key: 'Data',
              data: d.id
              })}
              key={d.id}
              >
            <Text style={styles.text}> Team: {d.data.team} Match: {d.data.match}</Text>
          </TouchableHighlight>
        ))

      }
    </ScrollView>
  )



export const QR = ( {info, uid} ) => (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{csv(info, uid, ', ')}</Text>
        <QRCode size={250} value={csv(info,uid,',')} />
      </View>
    )
