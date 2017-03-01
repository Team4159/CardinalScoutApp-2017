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
import QRCode from '../../../lib/react-native-qrcode';
import { display, dataToRender } from '../../../config/globalFunctions';
import { csv } from '../../../config/globalFunctions';

const Data = ({ info, data, onPress, uid }) => (
  <View style={{paddingTop: 70, paddingLeft:10,flex: 1,flexDirection: 'column',justifyContent: 'space-between'}}>
    <Text>{csv(info,uid,',')}</Text>
    <QRCode size={250} value={csv(info,uid,',')} />
    <Text>{display(dataToRender(data ,info), "\n")}</Text>
  </View>
)

const mapStateToProps = (state) => {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {onPress: (data, uid) => {
    dispatch(push({key:'QR', data, uid}))}
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Data)
