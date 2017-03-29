import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput,
         View,
         TouchableOpacity,
         Text,
         ListView,
         Alert,
         TouchableHighlight,
         Share,
       ScrollView } from 'react-native';
import BigButton from '../../../components/BigButton';
import SmallButton from '../../../components/SmallButton';
import styles from './styles';
import { push } from '../../../actions/navActions'
import QRCode from '../../../lib/react-native-qrcode';
import { display, dataToRender } from '../../../config/globalFunctions';
import { csv } from '../../../config/globalFunctions';

const Data = ({ info, data, onPress, uid }) => (
  <ScrollView>
  <View style={{paddingTop: 70, paddingLeft:10,flex: 1,flexDirection: 'column'}}>
    <QRCode size={250} value={csv(dataToRender(data,info),uid,',')} />
    <TouchableHighlight underlayColor='rgb(255,255,255)' style={{paddingTop:20}} onPress={() => shareData(csv(dataToRender(data,info),uid,','))}>
      <Text style={{color:'#8b0000', fontSize:16}}>Social Share</Text>
    </TouchableHighlight>
    <Text style={{paddingTop:20}}>{display(dataToRender(data, info), "\n")}</Text>
  </View>
  </ScrollView>
)

const shareData = (m) => {
  Share.share({
    message: m
  })
  .then(this._showResult)
  .catch((error) => this.setState({result: 'error: ' + error.message}));
}

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
