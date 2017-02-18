import { SUBMIT_FORM, CSV, RESET_DATA, CLEAR_STORED_DATA } from '../config/actionTypes';
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
function dataReducer(state=initialData, action){
  switch (action.type) {
    case SUBMIT_FORM:{
      var data = Object.assign({}, state.temporaryData, action.data)
      return Object.assign({}, state, {temporaryData: data})
    }
    case CSV: {
      return Object.assign({}, state, {storedData: csv(state.storedData, action, state.temporaryData)})
    }
    case RESET_DATA:
      return Object.assign({}, state, {
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
      });
    case CLEAR_STORED_DATA:
      return Object.assign({}, state, {
        storedData: []
      })
    default:
      return state

  }
}
export default dataReducer;
