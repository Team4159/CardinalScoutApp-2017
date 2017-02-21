import { connect } from 'react-redux'
import NavRoot from './NavRoot'
import { push, pop, } from '../actions/navActions'
function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavRoot)
