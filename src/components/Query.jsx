import React, { Component } from 'react'
import classNames from 'classnames'

class Query extends Component {
  render() {
    const { text, color, type } = this.props
    return (
      <div className={"box-marquee " + type}>
        <pre style={{color}}>{ text }</pre>
      </div>
    )
  }
}

export default Query
