import React, { Component } from 'react';
import PreForm from './containers/PreFormContainer';
import AutonForm from './containers/AutonFormContainer';
import TeleopForm from './containers/TeleopFormContainer';
import { push } from '../../actions/navActions';
import { connect } from 'react-redux';

class MatchScout extends Component{
  constructor(props){
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }
  renderScene = (scene) =>{
      if(scene === 'AutonForm') {
        return <AutonForm />
      }
      if(scene === 'TeleopForm') {
        return <TeleopForm />
      }
        return <PreForm />
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
