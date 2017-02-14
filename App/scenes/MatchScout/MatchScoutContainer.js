import React, { Component } from 'react';
import MatchForm from './containers/MatchFormContainer';
import AutonForm from './components/AutonForm';
import { push } from '../../actions/navActions';
import { connect } from 'react-redux';

class MatchScout extends Component{
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene = (scene) =>{
      if(scene === 'AutonForm'){
        return <AutonForm />
      }
        return <MatchForm />
  }
  render(){
    return(
      this.renderScene(this.props.scene)
    )
  }
}
function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    push: (route) => dispatch(push(route))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchScout)
