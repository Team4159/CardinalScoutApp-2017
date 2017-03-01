import { connect } from 'react-redux'
import TeleopForm from '../components/TeleopForm'
import { push, pop, reset } from '../../../actions/navActions'
import { submit, resetData, stash } from '../../../actions/dataActions'

const mapStateToProps = (state) => {
  return { data: state.data.temporaryData.matchScoutData }
}

const mapDispatchToProps = (dispatch) => {
  return {
    push: (route) => dispatch(push(route)),
    submit: (data) => dispatch(submit(data)),
    reset: (route) => dispatch(reset(route)),
    onPlusPress: (key, data) => {
      if(key === 'gear') {
      var gear = data.teleopGears + 1;
      dispatch(submit({teleopGears: gear }));
      }
      if(key === 'ball high') {
      var ball = data.teleopBallsHigh + 3;
      dispatch(submit({teleopBallsHigh: ball}));
      }
      if(key === 'ball low') {
      var ballL = data.teleopBallsLow + 10;
      dispatch(submit({teleopBallsLow: ballL}));
      }
      if(key === 'robot dead time'){
        var time = data.robotDeadTime + 10;
        dispatch(submit({robotDeadTime: time}));
      }
    },
    onMinusPress: (key, data) => {
      if(key === 'gear'){
      var gear = data.teleopGears - 1;
      if(gear >= 0){
      dispatch(submit({teleopGears: gear }));
      }
      }
      if(key === 'ball high') {
      var ball = data.teleopBallsHigh - 3;
      if(ball >= 0){
      dispatch(submit({teleopBallsHigh: ball}));
      }
      }
      if(key === 'ball low') {
      var ballL = data.teleopBallsLow - 10;
      if(ballL >= 0){
      dispatch(submit({teleopBallsLow: ballL}));
      }
      }
      if(key === 'robot dead time'){
        var time = data.robotDeadTime - 10;
        if(time >= 0)
        dispatch(submit({robotDeadTime: time}));
      }
    },
    onNextPress: (route) => {
      dispatch(stash())
      dispatch(reset(route))
      dispatch(resetData())
    },
    onChangeText: (text) => {
      dispatch(submit({comments: text}))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeleopForm)
