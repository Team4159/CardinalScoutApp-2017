import { combineReducers } from 'redux';
import navState from './navReducer';
import data from './submitReducer';


export default combineReducers({
  navState,
  data
})
