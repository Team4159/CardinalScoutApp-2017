import React, { Component } from 'react';
import MatchForm from './MatchForm';
import AutonForm from './AutonForm';
import { push } from '../../actions/navActions';
import { connect } from 'react-redux';

class MatchScout extends Component{
  constructor(props){
    super(props);
    this.submitPress = this.submitPress.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }
  submitPress = (scene) =>(
    push({key: scene})
  )
  renderScene = (scene) =>{
      if(scene === 'AutonForm'){
        return <AutonForm />
      }
        return <MatchForm submitPress={() => push({key: 'AutonForm'})}/>
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
