import React, { Component } from 'react';
import { Text, View, TouchableHighlight, ListView } from 'react-native';
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

export class Logs extends Component {
  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state =  {
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }
  componentWillReceiveProps(newProps) {
    if(newProps.data){
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.data)
      })
    }
  }
  _renderRow(d){
    return(
          <TouchableHighlight style={styles.row}
            onPress={() => this.props.push({
              key: 'Data',
              data: d.id
              })}
              >
            <Text style={styles.text}> Team: {d.data.team} Match: {d.data.match}</Text>
          </TouchableHighlight>
    )
  }
  render(){
    return(

        <ListView
          dataSource= {this.state.dataSource}
          renderRow = {(d) => this._renderRow(d)}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          style = {{paddingTop: 75}}
          enableEmptySections={true}
        />
    );
  }
}


export const QR = ( {info, uid} ) => (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <QRCode size={250} value={csv(info.data,uid,',')} />
      </View>
    )
