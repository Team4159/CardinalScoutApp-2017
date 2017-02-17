import { SUBMIT_FORM, CSV } from '../config/actionTypes';

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
