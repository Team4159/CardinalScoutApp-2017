import { connect } from 'react-redux'
import PreForm from '../components/PreForm'
import { push, pop } from '../../../actions/navActions'
import { submit } from '../../../actions/dataActions'
function mapStateToProps (state) {
  return {data: state.data.storedData}
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
)(PreForm)
