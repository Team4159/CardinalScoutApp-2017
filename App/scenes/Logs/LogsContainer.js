import { connect } from 'react-redux';
import { pop } from '../../actions/navActions';
import { resetStoredData } from '../../actions/dataActions';
import Logs from './Logs';
function mapStateToProps (state) {
  return {
    data: state.data.storedData.stash
} }

function mapDispatchToProps (dispatch) {
  return {
    reset: () => dispatch(resetStoredData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logs)
