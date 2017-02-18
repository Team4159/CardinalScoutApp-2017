import { createStore } from 'redux';
import rootReducer from '../reducers';
import {persistStore, autoRehydrate} from 'redux-persist';
export default function configureStore(){
  /* eslint-disable no-undef */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, composeEnhancers(autoRehydrate()));
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
