import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
export default function configureStore(){
  /* eslint-disable no-undef */
  const store = createStore(rootReducer, compose(autoRehydrate()));
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
