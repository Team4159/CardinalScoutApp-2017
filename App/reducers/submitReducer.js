import { SUBMIT_FORM } from '../config/actionTypes';

function submitReducer(state={}, action){
  switch (action.type) {
    case SUBMIT_FORM:{
      return Object.assign({}, state, action.data)
    }
    default:
      return state

  }
}
export default submitReducer;
