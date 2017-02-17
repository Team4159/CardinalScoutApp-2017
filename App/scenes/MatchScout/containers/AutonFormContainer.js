import { connect } from 'react-redux'
import AutonForm from '../components/AutonForm'
import { push, pop, reset } from '../../../actions/navActions'
import { submit } from '../../../actions/submitAction'
function mapStateToProps (state) {
  return { data: state.data }
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
)(AutonForm)
