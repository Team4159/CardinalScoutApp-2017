import React, { Component } from 'react';
import Logs from './containers/LogsContainer';
import Data from './containers/DataContainer'
import { QR } from './components/Logs';
export default class LogsContain extends Component{
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene = (scene, d, uid) => {
    if(scene === 'QR'){
      return <QR info={d}/>
    }else if(scene=== 'Data' ){
      return <Data info={d} />
    }
    return <Logs />
  }
  render(){
  const { info, scene, uid } = this.props;
    return (
      this._renderScene(scene, info, uid)
    )
  }
}
