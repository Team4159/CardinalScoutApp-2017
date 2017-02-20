import { connect } from 'react-redux';
import { push } from '../../actions/navActions';
import { stash } from '../../actions/dataActions';
import Home from './Home';
function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    stash: () => dispatch(stash())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
