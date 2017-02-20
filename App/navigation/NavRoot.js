import React, { Component } from 'react'
import { Text } from 'react-native'
import Home from '../scenes/Home'
import Logs from '../scenes/Logs'
import MatchScout from '../scenes/MatchScout'
import Settings from '../scenes/Settings'
import {
  NavigationExperimental,
  TouchableOpacity,
  Text
} from 'react-native'

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental


class Header extends Component {
  render() {
    const  { scene } = this.props;
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={scene.route.key==='MatchScout' ? null:this._back}
        renderRightComponent={this._renderRightComponent}
      />
    );
  }
  _renderRightComponent = (props) => (
    <TouchableOpacity>
      <Text>cancle</Text>
    </TouchableOpacity>
  )
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
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home />
      case 'Logs':
        return <Logs />
      case 'MatchScout':
        return <MatchScout />
      case 'AutonForm':
        return <MatchScout scene='AutonForm' />
      case 'TeleopForm':
        return <MatchScout scene='TeleopForm' />
      case 'Settings':
        return <Settings/>
    }
  }
  _renderHeader = (sceneProps) => {
    const route = sceneProps.scene.route;
    if(route.key == 'Home') return null;
    return (
      <Header
        pop={this.props.pop}
        {...sceneProps}
      />
    );
  }
  render() {
    const { navState } = this.props
    return (
      <NavigationCardStack
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene}
      />
    )
  }
}

export default NavRoot
