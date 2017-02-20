import React, { Component } from 'react'
import Home from '../scenes/Home'
import Logs from '../scenes/Logs'
import MatchScout from '../scenes/MatchScout'
import Settings from '../scenes/Settings'
import {
  NavigationExperimental,
  TouchableOpacity,
  Text,
  View
} from 'react-native'

const {
  Card: NavigationCard,
  Header: NavigationHeader,
  StateUtils: NavigationStateUtils,
  Transitioner: NavigationTransitioner
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
      <Text style={{color: 'blue'}}>cancle</Text>
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
    const { navState, pop } = this.props
    return (
      <NavigationTransitioner
        renderHeader={this._renderHeader}
        navigationState={navState}
        render={props => (
          <View style={{flex: 2}}>
            <NavigationCard
              {...props}
              onNavigateBack={pop}
              renderScene={this._renderScene}
              key={props.scene.route.key}
              panHandlers={props.scene.route.key === 'MatchScout' ? null: undefined}
            />
            {this._renderHeader(props)}
          </View>
        )}
      />
    )
  }
}

export default NavRoot
