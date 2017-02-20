import { STASH, SET_UID } from '../config/actionTypes';

function commas(d){
  var names = Object.keys(d);
  var data = Object.values(d);
  var str = ""
  for(var i = 0; i < names.length; i++){
    str += names[i] + " = " + data[i] + ", "
  }
  return str;
}
function storedData(state={stash: [], uid: ''}, action, data){
  switch(action.type){
    case STASH:{
      var obj = {id: action.id, data: data}
      var ds = [...state.stash, obj]
      return Object.assign({}, state, {stash: ds})
    }
    case SET_UID:{
      return Object.assign({}, state, {uid: action.uid})
    }
    default:
    return state;
    }
}

export default storedData;
