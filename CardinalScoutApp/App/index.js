import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import NavRootContainer from './navigation/NavRootContainer';
import rootReducer from './Reducers';
const store = configureStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('CardinalScoutApp', () => App);
