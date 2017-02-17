import { connect } from 'react-redux'
import TeleopForm from '../components/TeleopForm'
import { push, pop, reset } from '../../../actions/navActions'
import { submit, csv } from '../../../actions/submitAction'
function mapStateToProps (state) {
  return { data: state.data }
}
function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop()),
    submit: (data) => dispatch(submit(data)),
    reset: () => dispatch(reset()),
    csv: () => dispatch(csv()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeleopForm)
