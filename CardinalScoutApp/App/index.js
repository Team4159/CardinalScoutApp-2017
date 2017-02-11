import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './Config/ConfigureStore';
import { Provider } from 'react-redux';
import NavRootContainer from './Navigation/NavRootContainer'
const store = configureStore()

class CardinalScoutApp extends React.Component{
  render(){
  return (
    <Provider store={store}>
      <NavRootContainer/>
    </Provider>
   );
  }
}
AppRegistry.registerComponent('CardinalScoutApp', () => CardinalScoutApp);
