import { SUBMIT_FORM } from '../config/actionTypes';

export function submit(data){
  return {
    type: SUBMIT_FORM,
    data
    }
}
