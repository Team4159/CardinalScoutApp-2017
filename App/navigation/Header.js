import React, { Component } from 'react';
import {
  NavigationExperimental,
  TouchableOpacity,
  Text,
  View,
  BackAndroid
} from 'react-native';
const{
  Header: NavigationHeader,
} = NavigationExperimental;

export default class Header extends Component {
  render() {
    const  { scene } = this.props;
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={(scene.route.key==='Pre Match' || scene.route.key==='Edit Data') ? null:this._back}
        renderRightComponent={(props) => this._renderRightComponent(props)}
      />
    );
  }
  _renderRightComponent(props){
    let route = props.scene.route;
    if(route.key==='Pre Match' || route.key === 'Autonomous'
    || route.key==='Teleop' ){
    return(
    <TouchableOpacity onPress={() => this.props.cancelPressed()}>
      <Text style={{marginTop: 13, marginRight: 13}}>Cancel</Text>
    </TouchableOpacity>
    )
    }
    if(route.key === 'Edit Data'){
      return (<TouchableOpacity onPress={() => this.props.pop()}>
        <Text style={{marginTop: 13, marginRight: 13}}>Cancel</Text>
      </TouchableOpacity>)
    }
    if(route.key === 'Data'){
      return(
      <TouchableOpacity onPress={() => this.props.editPressed(route.data)}>
        <Text style={{marginTop: 13, marginRight: 13}}>Edit</Text>
      </TouchableOpacity>
      )
    }
    return undefined;
  }
  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent= (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
}
