import { SUBMIT_FORM, CSV, RESET_DATA } from '../config/actionTypes';

export function submit(data){
  return {
    type: SUBMIT_FORM,
    data
    }
}
export function csv(){
  return{
    type: CSV,
  }
}
export function resetData(){
  return{
    type: RESET_DATA,
  }
}
