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
import { display, dataToRender } from '../../../config/globalFunctions';


const Data = ({ info, data }) => (
  <View style={{paddingTop: 70}}>
    <Text>{display(dataToRender(data ,info), "\n")}</Text>
  </View>
)
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash,
    uid: state.data.storedData.uid
  }
}
export default connect(
  mapStateToProps
)(Data)
