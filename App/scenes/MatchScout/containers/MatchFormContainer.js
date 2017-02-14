import { connect } from 'react-redux'
import MatchForm from '../components/MatchForm'
import { push, pop } from '../../../actions/navActions'
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchForm)
