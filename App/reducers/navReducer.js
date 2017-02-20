import { POP_ROUTE, PUSH_ROUTE, RESET_ROUTE } from '../config/actionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;
var initialRoute = {
  index: 0,
  routes: [{key: 'Home'}],
}
function navReducer(state = initialRoute, action){
  switch (action.type){
    case PUSH_ROUTE:{
      return NavigationStateUtils.push(state, action.route)
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state)
    }
    case RESET_ROUTE:{
      return initialRoute;
    }
    default:
      return state;
  }
}
export default navReducer;
