import { CSV } from '../config/actionTypes';

function csv(state=[], action){
  function commas(d){
    var names = Object.keys(d);
    var data = Object.values(d);
    var str = ""
    for(var i = 0; i < names.length; i++){
      str += names[i] + " = " + data[i] + ", "
    }
    return str;
  }
  if(action.type === CSV){
    var str = commas(state);
    return [
      ...state, str
    ]
  }
  return state;
}
export default csv;
