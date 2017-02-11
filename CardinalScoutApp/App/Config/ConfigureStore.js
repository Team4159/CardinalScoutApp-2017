import { createStore } from 'redux';
import rootReducer from '../Reducers';

export default function configureStore(){
  /* eslint-disable no-undef */
  const store = createStore(rootReducer);
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
