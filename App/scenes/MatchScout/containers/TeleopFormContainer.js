import { connect } from 'react-redux'
import TeleopForm from '../components/TeleopForm'
import { push, pop, reset } from '../../../actions/navActions'
import { submit, csv, resetData } from '../../../actions/submitAction'
function mapStateToProps (state) {
  return { data: state.data }
}
function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    submit: (data) => dispatch(submit(data)),
    reset: () => dispatch(reset()),
    csv: () => dispatch(csv()),
    onPlusPress: (key, data) => {
      if(key === 'gear') {
      var gear = data.teleopGears + 1;
      dispatch(submit({teleopGears: gear }));
      }
      if(key === 'ball high') {
      var ball = data.teleopBallsHigh + 1;
      dispatch(submit({teleopBallsHigh: ball}));
      }
      if(key === 'ball low') {
      var ballL = data.teleopBallsLow + 1;
      dispatch(submit({teleopBallsLow: ballL}));
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
      var ball = data.teleopBallsHigh - 1;
      if(ball >= 0){
      dispatch(submit({teleopBallsHigh: ball}));
      }
      }
      if(key === 'ball low') {
      var ballL = data.teleopBallsLow - 1;
      if(ballL >= 0){
      dispatch(submit({teleopBallsLow: ballL}));
      }
      }
    },
    onNextPress: () => {
      dispatch(csv())
      dispatch(reset())
      dispatch(resetData())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeleopForm)
