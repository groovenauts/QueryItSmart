import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/appActions'
import Button from './Button'

class Restart extends Component {

  onClick(e) {
    this.props.actions.restart()
  }

  render() {
    return (
      <Button
        label='Restart'
        handler={ this.onClick.bind(this) }
        />
    )
  }
}

const stateToProps = state => {
  return {
    app: state.app,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  stateToProps,
  mapDispatchToProps
)(Restart)
