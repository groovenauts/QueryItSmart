import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/searchImageActions'
import Button from './Button'

class Close extends Component {

  onClick(e) {
    this.props.actions.close()
  }

  render() {
    return (
      <Button
        label='Close'
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
)(Close)
