import React from 'react';
import { AppRegistry, AsyncStorage } from 'react-native';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import NavRootContainer from './navigation/NavRootContainer';


const store = configureStore();
persistStore(store, {storage: AsyncStorage});
const App = () => (
  <Provider store={store}>
    <NavRootContainer />
  </Provider>
)
export default App;
AppRegistry.registerComponent('CardinalScoutApp', () => App);
