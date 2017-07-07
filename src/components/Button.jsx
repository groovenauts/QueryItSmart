import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

const textStyle={
  position: 'absolute',
  lineHeight: '1em',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  top: '50%',
  left: '50%',
  textAlign: 'center',
  userSelect: 'none',
}

class Button extends Component {

  render() {
    const { label, style={}, handler, className="" } = this.props
    return (
      <div className={ className }
        style={ style }
        onClick={ handler }>
        <div style={textStyle}>
          { label }
        </div>
      </div>
    )
  }
}

export default Button
