import React, { Component } from 'react'
import classNames from 'classnames'

class Circle extends Component {

  render() {
      const { style, onClick=()=>{}, onMouseOver=()=>{}, outerClassName="", innerClassName="" } = this.props
    return (
      <div
        style={style}
        className={ classNames("circle-outer", outerClassName) }
        onClick={ onClick }
        onMouseOver= { onMouseOver }>
        <div className={ classNames("circle", "thumbnail", "animated", "fadeIn", innerClassName) }>
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Circle
