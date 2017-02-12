import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './Config/ConfigureStore';
import { Provider } from 'react-redux';
import NavRootContainer from './Navigation/navRootContainer';
import rootReducer from './Reducers';
const store = configureStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)

AppRegistry.registerComponent('CardinalScoutApp', () => App);
