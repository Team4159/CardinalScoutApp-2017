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
  Transitioner: NavigationTransitioner,
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
      <Text>Cancel</Text>
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
        return <Home/>
      case 'Logs':
        return <Logs/>
      case 'Pre Match':
        return <MatchScout scene='PreForm'/>
      case 'Autonomous':
        return <MatchScout scene='AutonForm' />
      case 'Teleop':
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
          navigationState={navState}
          render={props => {
            <View>
              <NavigationCard
                {...props}
                onNavigateBack={pop}
                panHandlers={props.scene.route.key==='Pre Match' ? null:undefined}
                renderScene={this._renderScene}
                key={props.scene.route.key}
              />
              {this._renderHeader(props)}
            </View>
          }}
      />
    )
  }
}

export default NavRoot
