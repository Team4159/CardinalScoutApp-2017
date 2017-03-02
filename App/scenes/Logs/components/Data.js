import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         ListView,
         Alert } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';
import { push } from '../../../actions/navActions'
import QRCode from '../../../lib/react-native-qrcode'
import { display, dataToRender, csv } from '../../../config/globalFunctions';

//<BigButton text='Next' onPress={() =>
  //onPress(dataToRender(data, info))} />
const Data = ({ info, data, onPress, uid }) => (
  <View style={{paddingTop: 70}}>
    <Text>{display(dataToRender(data ,info), "\n")}</Text>
      <Text>{csv(dataToRender(data, info), 'hello',',')}</Text>
      <QRCode size={250} value={csv(dataToRender(data, info),uid,',')} />
  </View>
)
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
  }
}
function mapDispatchToProps(dispatch){
  return {onPress: (data, uid) => {
    dispatch(push({key:'QR', data, uid}))
  }
}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)
