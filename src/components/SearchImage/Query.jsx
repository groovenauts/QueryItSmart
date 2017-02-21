import React, { Component } from 'react'
import classNames from 'classnames'

class Query extends Component {
  render() {
    const { text } = this.props
    return (
      <div className="box-marquee">
        <pre>{ text }</pre>
      </div>
    )
  }
}

export default Query
