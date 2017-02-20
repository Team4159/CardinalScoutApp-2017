import { SUBMIT_FORM, RESET_DATA, CLEAR_STORED_DATA, STASH, SET_UID } from '../config/actionTypes';

export function submit(data){
  return {
    type: SUBMIT_FORM,
    data
    }
}
export function resetData(){
  return{
    type: RESET_DATA,
  }
}
export function resetStoredData(){
  return{
    type: CLEAR_STORED_DATA
  }
}
export function stash(){
  return {
    type: STASH
  }
}
export function setUID(uid){
  return {
    type: SET_UID,
    uid
  }
}
