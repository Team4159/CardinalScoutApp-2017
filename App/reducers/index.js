import { combineReducers } from 'redux';
import navState from './navReducer';
import data from './submitReducer';
import { PUSH_ROUTE, POP_ROUTE, SUBMIT_FORM } from '../config/actionTypes';
const initialState = {
  navState: {
    index: 0,
    routes: [{key: 'Home'}],
  },
  data: {}
}
const rootReducer = (state, action) =>{
  if(!state){
    return initialState;
  }
  switch (action.type) {
    case PUSH_ROUTE:
    case POP_ROUTE:
      return Object.assign({}, state, {
        navState: navState(state.navState, action)
      })
    case SUBMIT_FORM:
      return Object.assign({}, state, {
        data: data(state.data, action)
      })
  }
}

export default rootReducer;
