import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './Config/ConfigureStore';
import { Provider } from 'react-redux';
import Home from './Scenes/Home'

const store = configureStore()

class CardinalScoutApp extends React.Component{
  render(){
  return (
    <Home/>
   );
  }
}
AppRegistry.registerComponent('CardinalScoutApp', () => CardinalScoutApp);
