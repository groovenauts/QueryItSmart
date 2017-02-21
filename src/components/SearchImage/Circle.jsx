import React, { Component } from 'react'
import classNames from 'classnames'

class Circle extends Component {

  render() {
    const { imgSrc, style,onClick=()=>{}, onMouseOver=()=>{}, onLoad=()=>{}, onError=()=>{}, className_="", outerClassName="", imgClassName="" } = this.props
    return (
      <div
        style={style}
        className={ classNames("circle-outer", outerClassName) }
        onClick={ onClick }
        onMouseOver= { onMouseOver }>
        <div className={ classNames("circle", "thumbnail", className_) }>
          <img src={ imgSrc } className={ imgClassName } 
            onError={ onError }
            onLoad={ onLoad }/>
        </div>
      </div>
    )
  }
}

export default Circle
