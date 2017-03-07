import React, { Component } from 'react'
import Home from '../scenes/Home'
import Logs from '../scenes/Logs'
import MatchScout from '../scenes/MatchScout'
import Settings from '../scenes/Settings'
import {
  NavigationExperimental,
  TouchableOpacity,
  Text,
  View,
  BackAndroid
} from 'react-native'

const {
  Card: NavigationCard,
  StateUtils: NavigationStateUtils,
  Transitioner: NavigationTransitioner,
} = NavigationExperimental
import Header from './Header';

class NavRoot extends Component {
  _renderScene = (props) => {
    const route = props.scene.route
    switch(route.key) {
      case 'Home':
        return <Home/>
      case 'Logs':
        return <Logs/>
      case 'Data':
        return <Logs scene='Data' info={route.data} />
      case 'Edit Data':
        return <Logs scene='EditData' info={route.data}/>
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
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () =>this.props.pop())
  }
  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', () =>this.props.pop())
  }

  _renderHeader = (sceneProps) => {
    const route = sceneProps.scene.route;
    if(route.key == 'Home') return null;
    return (
      <Header
        pop={this.props.pop}
        cancelPressed = {this.props.cancelPressed}
        editPressed={this.props.editPressed}
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
              panHandlers={props.scene.route.key === 'MatchScout'
              ? null: undefined}
            />
            {this._renderHeader(props)}
          </View>
        )}
      />
    )
    }
}
export default NavRoot
