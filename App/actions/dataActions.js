import { SUBMIT_FORM, RESET_DATA, CLEAR_STORED_DATA, STASH, SET_UID, EDIT_DATA } from '../config/actionTypes';
import v4 from 'uuid/v4';
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
    type: STASH,
    id: v4()
  }
}
export function setUID(uid){
  return {
    type: SET_UID,
    uid
  }
}
export function editData(newData, id){
  return{
    type: EDIT_DATA,
    newData,
    id
  }
}
