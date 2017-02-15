import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import NavRootContainer from './navigation/NavRootContainer';
const store = configureStore()

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)
export default App;
AppRegistry.registerComponent('CardinalScoutApp', () => App);
