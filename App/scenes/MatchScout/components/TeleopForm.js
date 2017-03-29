import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         TouchableHighlight,
         ScrollView,
         Alert,
         KeyboardAvoidingView,
         Switch  } from 'react-native';
import SmallButton from '../../../components/SmallButton';
import BigButton from '../../../components/BigButton';
import styles from './styles';
import { display } from '../../../config/globalFunctions';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const TeleopForm = ({ onPlusPress, onMinusPress, data, submit, onChangeText, onNextPress }) => (
      <ScrollView contentContainerStyle={{height: 900}}>
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

          <Text style={styles.rowText}> Climb? </Text>
          <View style={styles.row}>
            <Switch
              onValueChange={(value)=>{value ? submit({climb:'T'}) : submit({climb:'F'})}}
              value={data.climb === 'T'} tintColor='#D3D3D3' onTintColor='#8b0000'/>
          </View>

          <Text style={styles.rowText}>Touch Pad?</Text>
          <View style={styles.row}>
            <Switch
              onValueChange={(value)=>{value ? submit({reachTouchPad:'T'}) : submit({reachTouchPad:'F'})}}
              value={data.reachTouchPad === 'T'} tintColor='#D3D3D3' onTintColor='#8b0000'/>
          </View>

          <Text style={styles.rowText}> Robot Dead Time: {data.robotDeadTime}s</Text>
          <View style={styles.row}>
            <SmallButton text='+' onPress={() =>
              onPlusPress('robot dead time', data)}/>
            <SmallButton text='-' onPress={() =>
              onMinusPress('robot dead time', data)} />
          </View>

          <Text style={styles.rowText}> Important comments </Text>
          <TextInput placeholder={'Ex. Died on field'}
            onChangeText={(text) => onChangeText(text)}
            style={styles.textBox} value={data.comments}
            maxLength={20}
          />
        <KeyboardSpacer/>

          <BigButton onPress={() => Alert.alert(
            'Comfirmation',
            display(data, '\n'),
            [
            {text: 'Cancel'},
            { onPress: () =>
                { onNextPress()},
              text: 'Submit'
            },
            ]
          )} text='Done' />

        </View>
      </ScrollView>
)
export default TeleopForm;
