import React, { Component } from 'react'
import {
  white,
  black,
  yellowA700,
} from 'material-ui/styles/colors'
import Button from './Button'
import Overlay from './Overlay'

const styles = {
  inner: {
    overflow: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    textAlign: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: '9vh',
    fontWeight: 300,
    padding: '.2em',
  },
  subtitle: {
    fontSize: '4vh',
    fontWeight: 100,
  }
}

class Finished extends Component {

  render() {
    const {
      title,
      subtitle,
      color=white,
      backgroundColor=black,
      closeHandler=()=>{}
    } = this.props
    return (
      <Overlay backgroundColor={backgroundColor}>
        <div style={styles.inner}>
          { title ? <div style={{...styles.title, ...{color: color}}}>{ title }</div> : null }
          { subtitle ?
            <div style={{...styles.subtitle, ...{color: color}}}
              dangerouslySetInnerHTML={{__html: subtitle}} />
            : null }
        </div>
        <Button
          className="hover"
          labelColor={backgroundColor}
          buttonColor={color}
          label='Close'
          handler={ closeHandler }
          { ...this.props }
        />
      </Overlay>
    )
  }
}

export default Finished
