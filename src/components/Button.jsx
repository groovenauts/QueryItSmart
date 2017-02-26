import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

const textStyle={
  position: 'absolute',
  lineHeight: '1em',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  overflow: 'hidden',
  top: '50%',
  left: '50%',
}

class Button extends Component {

  render() {
    const { label, style, handler, buttonColor, labelColor } = this.props
    const defaultStyle = {
      zIndex: 1000,
      position: 'absolute',
      backgroundColor: buttonColor,
      height: 100,
      width: 100,
      bottom: 60,
      right: 60,
      fontSize: '26px',
      lineHeight: '100px',
      color: labelColor,
      boxShadow: `0px 0px 0px 8px ${labelColor}, 0px 0px 0px 18px ${buttonColor}`,
      transition: 'show 1.5s linear'
    }
    return (
      <div className={ classNames("circle", "hover-lite") }
        style={ _.defaults(style, defaultStyle) }
        onClick={ handler }>
        <div style={textStyle}>
          { label }
        </div>
      </div>
    )
  }
}

export default Button
