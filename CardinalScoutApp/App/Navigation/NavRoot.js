import React, { Component } from 'react'
import Home from '../Scenes/Home'
import Logs from '../Scenes/Logs'
import {
  NavigationExperimental,
} from 'react-native'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental


class Header extends Component{
  render(){
    return(
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
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
class NavRoot extends Component {
  _renderScene= (props) =>{
    switch (props.scene.route.key) {
      case 'Home':
        return <Home navigate={this._navigate}/>
      case 'Logs':
        return <Logs navigate={this._navigate}/>
    }
  }
  _renderHeader = (sceneProps) =>{
    return(
      <Header
        navigate={this.props.pop}
        {...sceneProps}
      />
    )
  }
  render(){
    return(
      <NavigationCardStack
        navigationState={this.props.navState}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
      />
    )
  }
}

export default NavRoot
