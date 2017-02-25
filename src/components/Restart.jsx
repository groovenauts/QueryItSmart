import React, { Component } from 'react'
import Button from './Button'

class Restart extends Component {

  render() {
    const { onClick } = this.props
    return (
      <Button
        label='Restart'
        handler={ onClick }
        { ...this.props }
        />
    )
  }
}

export default Restart
