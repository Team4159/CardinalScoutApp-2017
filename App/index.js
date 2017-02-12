import React from 'react';
import { AppRegistry } from 'react-native';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import NavRootContainer from './navigation/NavRootContainer';
import rootReducer from './reducers';
const store = configureStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)
export default App;
AppRegistry.registerComponent('CardinalScoutApp', () => App);
