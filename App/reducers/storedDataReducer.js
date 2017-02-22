import { STASH, SET_UID, EDIT_DATA } from '../config/actionTypes';

function editData(state, action){
  switch(action.type){
    case EDIT_DATA:{
      if(action.id !== state.id){
      return state;
    }
    return Object.assign({}, state, {data: action.newData})
  }
    default: return state;
  }
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
    case EDIT_DATA:{
      return Object.assign({}, state,
        {stash: state.stash.map(stashItem => editData(stashItem, action))})
    }
    default:
    return state;
    }
}

export default storedData;
