import React, { Component } from 'react'
import classNames from 'classnames'
import _ from 'lodash'

class Button extends Component {

  render() {
    const { label, style, handler } = this.props
    const defaultStyle = {
      zIndex: 1000,
      position: 'absolute',
      backgroundColor: 'white',
      height: 100,
      width: 100,
      bottom: 60,
      right: 60,
      fontSize: '26px',
      lineHeight: '100px',
      color: '#3023ae',
      boxShadow: '0px 0px 0px 8px #3023ae, 0px 0px 0px 18px white',
      transition: 'show 1.5s linear'
    }
    return (
      <div className={ classNames("circle", "hover-lite") }
        style={ _.defaults(style, defaultStyle) }
        onClick={ handler }>
        { label }
      </div>
    )
  }
}

export default Button
