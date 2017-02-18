import { SUBMIT_FORM, CSV } from '../config/actionTypes';
import csv from './csvReducer';
const initialData = {
   temporaryData :{match: '',
                   team: '',
                   autonGears: 0,
                   autonBallsLow: 0,
                   autonBallsHigh : 0,
                   cross: false,
                   teleopGears: 0,
                   teleopBallsHigh: 0,
                   teleopBallsLow: 0,
                   comments: ''
                 },
   storedData: []
}
function submitReducer(state=initialData, action){
  switch (action.type) {
    case SUBMIT_FORM:{
      var data = Object.assign({}, state.temporaryData, action.data)
      return Object.assign({}, state, {temporaryData: data})
    }
    case CSV: {
      return Object.assign({}, state, {storedData: csv(state.temporaryData, action)})
    }
    default:
      return state

  }
}
export default submitReducer;
