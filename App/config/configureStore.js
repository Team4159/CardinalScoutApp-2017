import { createStore } from 'redux';
import rootReducer from '../reducers';
import devToolsEnhancer from 'remote-redux-devtools';
export default function configureStore(){
  /* eslint-disable no-undef */
  const store = createStore(rootReducer, devToolsEnhancer());
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
