import { connect } from 'react-redux'
import MatchForm from '../components/MatchForm'
import { push, pop } from '../../../actions/navActions'
import { submit } from '../../../actions/submitAction'
function mapStateToProps (state) {
  return {}
}
function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop()),
    submit: (data) => dispatch(submit(data)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchForm)
