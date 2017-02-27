import React, { Component } from 'react'
import classNames from 'classnames'
import Circle from './Circle'
import Query from './Query'
import Header from './Header'

export default class Searching extends Component {
  render() {
    const { imgSrc, title, subtitle, pulseColor="", marqueeText="", textColor } = this.props
    const style = {
      height: 60,
      width: 60,
    }
    return (
      <div id="searching" style={{zIndex: 1000}}>
        <Header title={ title } subtitle={ subtitle } style={{color: textColor}}/>
        <div className="content">
          <Circle
            outerClassName="is-center">
            <img src={ imgSrc } className="large border-bold" />
          </Circle>
        </div>
        <div className="pulse">
          <div className="is-center" style={{...style, ...{backgroundColor: pulseColor}}}/>
          <div className="is-center" style={{...style, ...{backgroundColor: pulseColor}}}/>
          <div className="is-center" style={{...style, ...{backgroundColor: pulseColor}}}/>
        </div>
        <Query text={ marqueeText } color={textColor}/>
      </div>
    )
  }
}
