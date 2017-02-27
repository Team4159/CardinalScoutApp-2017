import { connect } from 'react-redux'
import PreForm from '../components/PreForm'
import { push, pop } from '../../../actions/navActions'
import { submit } from '../../../actions/dataActions'
const mapStateToProps = (state) => {
  return {
    match: state.data.temporaryData.match,
    team: state.data.temporaryData.team
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onNextPress: () => dispatch(push({key: 'Autonomous'})),
    onChangeText: (text, w) => dispatch(submit({ [ w ]: text })),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreForm)
