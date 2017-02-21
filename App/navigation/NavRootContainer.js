import { connect } from 'react-redux'
import NavRoot from './NavRoot'
import { resetData } from '../actions/dataActions'
import { push, pop, reset } from '../actions/navActions'
function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop()),
    cancelPressed: () => {
      dispatch(resetData())
      dispatch(reset())
    }

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRoot)
