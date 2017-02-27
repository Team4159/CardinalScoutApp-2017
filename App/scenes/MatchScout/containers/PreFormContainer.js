import { connect } from 'react-redux'
import PreForm from '../components/PreForm'
import { push, pop } from '../../../actions/navActions'
import { submit } from '../../../actions/dataActions'
function mapStateToProps (state) {
  return {
    match: state.data.temporaryData.match,
    team: state.data.temporaryData.team
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onNextPress: () => dispatch(push({key: 'Auton Form'})),
    onChangeText: (text, w) => dispatch(submit({ [ w ]: text })),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreForm)
