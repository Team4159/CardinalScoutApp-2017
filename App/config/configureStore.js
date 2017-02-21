import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { persistStore, autoRehydrate } from 'redux-persist';
// compose(autoRehydrate())
export default function configureStore(){
  /* eslint-disable no-undef */
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  if(module.hot){
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
