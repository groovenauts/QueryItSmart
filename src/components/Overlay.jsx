import React, { Component } from 'react'
import Button from './Button'

const styles = {
  outer: {
    zIndex: 1002,
    height: '100%',
    top: '50%',
    position: 'absolute',
    transform: 'translateY(-50%)',
  }
}

class Overlay extends Component {

  render() {
    const { backgroundColor } = this.props
    return (
      <div className="container animated fadeIn"
        style={{...styles.outer, ...{backgroundColor: backgroundColor}}}>
        { this.props.children }
      </div>
    )
  }
}

export default Overlay
