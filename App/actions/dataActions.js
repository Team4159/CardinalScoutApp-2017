import { SUBMIT_FORM, CSV, RESET_DATA, CLEAR_STORED_DATA } from '../config/actionTypes';

export function submit(data){
  return {
    type: SUBMIT_FORM,
    data
    }
}
export function csv(data){
  return{
    type: CSV,
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
