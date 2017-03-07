import React, { Component } from 'react';
import Logs from './containers/LogsContainer';
import EditData from './containers/EditDataContainer'
import Data from './components/Data';
import { QR } from './components/Logs';
export default class LogsContain extends Component{
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene = (scene, d, uid) => {
    switch (scene) {
      case 'EditData':
         return <EditData info={d} />
      case 'Data':
         return <Data info={d} />
      default:
          return <Logs />
    }
  }
  render(){
  const { info, scene, uid } = this.props;
    return (
      this._renderScene(scene, info, uid)
    )
  }
}
