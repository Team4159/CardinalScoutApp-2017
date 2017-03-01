import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';

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
