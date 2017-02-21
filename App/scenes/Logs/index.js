import React, { Component } from 'react';
import Logs from './LogsContainer';
import { DataContainer } from './Logs';
export default class LogsContain extends Component{
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene = (scene, d) => {
    if(scene === 'Data'){
      return <DataContainer info={d} />
    }
    return <Logs />
  }
  render(){
  const { info, scene } = this.props;
    return (
      this._renderScene(scene, info)
    )
  }
}
