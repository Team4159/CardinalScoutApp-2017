import { POP_ROUTE, PUSH_ROUTE } from '../Config/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

function navReducer(state, action){
  if(!state){
    return{
      index: 0,
      routes: [{key: 'Home'}],
    }
  }
  switch (action.type){
    case PUSH_ROUTE:{
      return NavigationStateUtils.push(state, action.route)
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state)
    }
    default:
      return state;
  }
}
export default navReducer;
