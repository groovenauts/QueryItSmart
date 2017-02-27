import React, { Component } from 'react'
import {
  white,
  black,
  yellowA700,
} from 'material-ui/styles/colors'
import Button from './Button'

const styles = {
  outer: {
    zIndex: 1002,
    height: '100%',
    top: '50%',
    position: 'relative',
    transform: 'translateY(-50%)',
  },
  inner: {
    height: '90%',
    overflow: 'hidden',
    paddingTop: '4vh',
    paddingBottom: '4vh',
    position: 'relative',
  },
  header: {
    fontSize: '3em',
    fontWeight: 100,
  },
  body: {
    overflow: 'auto',
    fontSize: '1.4em',
    textAlign: 'left',
    fontWeight: 100,
    paddingLeft: '20%',
    position: 'absolute',
    bottom: 'calc(6vh + 60px)',
    top: 'calc(8vh + 20px)',
  },
  footer: {
    fontSize: '2em',
    fontWeight: 100,
    bottom: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto 0',
    paddingBottom: '60px',
  }
}

class Overlay extends Component {

  render() {
    const {
      header,
      body,
      footer,
      backgroundColor=black,
      headerColor=white,
      bodyColor=white,
      footerColor=yellowA700,
      closeHandler=()=>{}
    } = this.props
    return (
      <div className="container"
        style={{...styles.outer, ...{backgroundColor: backgroundColor}}}>
        <div style={styles.inner}>
          { header ? <div style={{...styles.header, ...{color: headerColor}}}>{ header }</div> : null }
          { body ? <pre style={{...styles.body, ...{color: bodyColor}}}><code>{ body }</code></pre> : null }
          { footer ? <div style={{...styles.footer, ...{color: footerColor}}}>{ footer }</div> : null }
        </div>
        <Button
          className="hover"
          labelColor={backgroundColor}
          buttonColor={white}
          label='Close'
          handler={ closeHandler }
          { ...this.props }
        />
      </div>
    )
  }
}

export default Overlay
