import { connect } from 'react-redux'
import NavRoot from './NavRoot'
import { push, pop, reset } from '../actions/navActions'
import { resetData } from '../actions/dataActions'
function mapStateToProps (state) {
  return {
    navState: state.navState,
  }
}
export default connect(
  mapStateToProps,
  {
    push: (route) => push(route),
    pop: () => pop(),
    reset: () => reset(),
    resetData: () => resetData(),

  }
)(NavRoot)
