import { SUBMIT_FORM, RESET_DATA, CLEAR_STORED_DATA, STASH, SET_UID } from '../config/actionTypes';
import storedData from './storedDataReducer';
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
   storedData: {stash: [], uid: ''}
}
function dataReducer(state=initialData, action){
  switch (action.type) {
    case SUBMIT_FORM:{
      var data = Object.assign({}, state.temporaryData, action.data)
      return Object.assign({}, state, {temporaryData: data})
    }
    case SET_UID:
    case STASH:{
      return Object.assign({}, state, {storedData: storedData(state.storedData, action, state.temporaryData)})
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
