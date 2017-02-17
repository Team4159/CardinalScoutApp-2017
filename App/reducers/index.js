import { combineReducers } from 'redux';
import navState from './navReducer';
import data from './submitReducer';
import csv from './csvReducer';
import { PUSH_ROUTE, POP_ROUTE, SUBMIT_FORM, CSV, RESET_ROUTE, RESET_DATA } from '../config/actionTypes';
const initialState = {
  navState: {
    index: 0,
    routes: [{key: 'Home'}],
  },
  data: {
    match: '',
    team: '',
    autonGears: 0,
    autonBallsLow: 0,
    autonBallsHigh : 0,
    cross: false,
    teleopGears: 0,
    teleopBallsHigh: 0,
    teleopBallsLow: 0,

  },
  csv: [],

}
const rootReducer = (state, action) =>{
  if(!state){
    return initialState;
  }
  switch (action.type) {
    case PUSH_ROUTE:
    case POP_ROUTE:
      return Object.assign({}, state, {
        navState: navState(state.navState, action)
      })
    case RESET_ROUTE:
      return Object.assign({}, state, {
        navState: {
          index: 0,
          routes: [{key: 'Home'}],
        }
      })
    case RESET_DATA:
      return Object.assign( {}, state, {
        data: {
          match: '',
          team: '',
          autonGears: 0,
          autonBallsLow: 0,
          autonBallsHigh : 0,
          cross: false,
          teleopGears: 0,
          teleopBallsHigh: 0,
          teleopBallsLow: 0,

        }
      })
    case SUBMIT_FORM:
      return Object.assign({}, state, {
        data: data(state.data, action)
      })
    case CSV:
      return Object.assign({}, state, {
        csv: csv(state.csv, action, state.data)
      })
  }
}

export default rootReducer;
