import { SUBMIT_FORM, CSV, RESET_DATA } from '../config/actionTypes';

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
