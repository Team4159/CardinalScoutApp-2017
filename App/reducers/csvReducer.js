import { CSV } from '../config/actionTypes';

function csv(state=[], action, data){
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
    var str = commas(data);
    return [
      ...state, str
    ]
  }
}
export default csv;
