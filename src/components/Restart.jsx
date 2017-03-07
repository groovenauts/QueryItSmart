import React, { Component } from 'react'
import Button from './Button'

class Restart extends Component {

  render() {
    const { onClick, className } = this.props
    return (
      <Button
        label='Restart'
        className={ className }
        handler={ onClick }
        { ...this.props }
        />
    )
  }
}

export default Restart
