import { combineReducers } from 'redux';
import navState from './navReducer';
import data from './dataReducer';


export default combineReducers({
  navState,
  data
})
