import React, { Component } from 'react'
import classNames from 'classnames'
import Circle from './Circle'
import Query from './Query'

export default class Searching extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    const { imgSrc, pulseClassName="", marqueeText="", textColor="black" } = this.props
    const style = {
      height: 60,
      width: 60,
    }
    return (
      <div id="searching" style={{zIndex: 1000}}>
        <div className="content">
          <Circle
            outerClassName="is-center">
            <img src={ imgSrc } className="large border-bold" />
          </Circle>
        </div>
        <div className={`pulse ${pulseClassName}`}>
          <div className="is-center" style={style}/>
          <div className="is-center" style={style}/>
          <div className="is-center" style={style}/>
        </div>
        <Query text={ marqueeText } color={textColor}/>
      </div>
    )
  }
}
