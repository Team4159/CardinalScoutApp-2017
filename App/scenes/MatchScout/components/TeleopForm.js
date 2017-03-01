import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         TouchableHighlight,
         ScrollView,
         Alert } from 'react-native';
import SmallButton from '../../../components/SmallButton';
import BigButton from '../../../components/BigButton';
import styles from './styles';
/*
Alert.alert(
  'Comfirm information',
  display(data, '\n'),
  [
    {onPress: () =>
      {this.props.submit({comments: this.state.comments})
              this.props.onNextPress({key: 'Home'})},
    text: 'Submit'
  },
  {text: 'Cancel'}
  ]
)
*/
const display = (d, ch) => {
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = "";
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ch
  }
  return str;
}

const TeleopForm = ({ onPlusPress, onMinusPress, data, submit, onChangeText, onNextPress }) => (
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.rowText}>
            Gears: {data.teleopGears}
          </Text>
          <View style={styles.row}>
            <SmallButton onPress={() =>
              onPlusPress('gear', data)}
              text='+'
            />
            <SmallButton text='-' onPress={() =>
              onMinusPress('gear', data)}
            />
          </View>

          <Text style={styles.rowText}>
            High Goals: {data.teleopBallsHigh}
          </Text>
          <View style={styles.row}>
            <SmallButton onPress={() =>
              onPlusPress('ball high', data)} text='+'
            />
            <SmallButton onPress={() =>
              onMinusPress('ball high', data)}
              text='-'
            />
          </View>
          <Text style={styles.rowText}>
            Low Goals: {data.teleopBallsLow}
          </Text>
          <View style={styles.row}>
            <SmallButton onPress={() =>
              onPlusPress('ball low', data)}
              text='+'
            />
            <SmallButton onPress={() =>
              onMinusPress('ball low', data)}
              text='-'
            />
          </View>
          <Text style={styles.rowText}> Robot Dead Time: {data.robotDeadTime}s</Text>
          <View style={styles.row}>
            <SmallButton text='+' onPress={() =>
              onPlusPress('robot dead time', data)}/>
            <SmallButton text='-' onPress={() =>
              onMinusPress('robot dead time', data)} />
          </View>

          <Text style={styles.rowText}>Touch Pad?</Text>
          <View style={styles.row}>
            <SmallButton text='T' style={data.reachTouchPad==='T' ?
               {backgroundColor:'gray'} : undefined }
               onPress={() => submit({reachTouchPad: 'T'})}
               disabled={data.reachTouchPad==='T'}
             />
            <SmallButton text='F'style={data.reachTouchPad==='F' ?
              {backgroundColor:'gray'} : undefined }
              onPress={() => submit({reachTouchPad: 'F'})}
              disabled={data.reachTouchPad==='F'}
            />
          </View>

          <Text style={styles.rowText}>Climb?</Text>
          <View style={styles.row}>
            <SmallButton text='T'style={data.scoreTouchPad==='T' ?
              {backgroundColor:'gray'} : styles.counterButton }
              onPress={() => submit({scoreTouchPad: 'T'})}
              disabled={data.scoreTouchPad==='T'}
            />
            <SmallButton text='F' style={data.scoreTouchPad==='F' ?
              {backgroundColor:'gray'} : styles.counterButton}
              onPress={() => submit({scoreTouchPad: 'F'})}
              disabled={!data.scoreTouchPad==='F'}
            />
          </View>

          <Text style={styles.rowText}>Important comments</Text>
          <TextInput placeholder={'Ex. Died on field'}
            onChangeText={(text) => onChangeText(text)}
            style={styles.textBox} value={data.comments}
          />

          <BigButton onPress={() => Alert.alert(
            'Comfirm information',
            display(data, '\n'),
            [
            { onPress: () =>
                { onNextPress()},
              text: 'Submit'
            },
            {text: 'Cancel'}
            ]
          )} text='Done' />

        </View>
      </ScrollView>
)
export default TeleopForm;
