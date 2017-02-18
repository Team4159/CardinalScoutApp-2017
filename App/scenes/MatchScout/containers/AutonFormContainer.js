import { connect } from 'react-redux'
import AutonForm from '../components/AutonForm'
import { push, pop, reset } from '../../../actions/navActions'
import { submit } from '../../../actions/submitAction'
const mapStateToProps = (state) => {
  return { data: state.data }
}
const mapDispatchToProps = (dispatch) => {
  return {
    push: (route) => dispatch(push(route)),
    submit: (data) => dispatch(submit(data)),
    onPlusPress: (key, data) => {
      if(key === 'gear'){
      var gear = data.autonGears + 1;
      dispatch(submit({autonGears: gear }));
      }
      if(key === 'ball high'){
      var ball = data.autonBallsHigh + 1;
      dispatch(submit({autonBallsHigh: ball}));
      }
      if(key === 'ball low'){
      var ballL = data.autonBallsLow + 1;
      dispatch(submit({autonBallsLow: ballL}));
      }
    },
    onMinusPress: (key, data) => {
      if(key === 'gear'){
      var gear = data.autonGears - 1;
      if(gear >= 0){
      dispatch(submit({autonGears: gear }));
      }
      }
      if(key === 'ball high'){
      var ball = data.autonBallsHigh - 1;
      if(ball >= 0){
      dispatch(submit({autonBallsHigh: ball}));
      }
      }
      if(key === 'ball low'){
      var ballL = data.autonBallsLow - 1;
      if(ballL >= 0){
      dispatch(submit({autonBallsLow: ballL}));
      }
      }
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutonForm)
