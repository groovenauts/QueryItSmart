import React, { Component } from 'react'
import classNames from 'classnames'
import { white, indigo900 } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/appActions'
import { connect } from 'react-redux'

const themeColor = '#3c85f4'
const styles = {
  outer: {
    position: 'relative',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    pointerEvents: 'auto',
    backgroundColor: themeColor,
  },
  inner: {
    width: '100%',
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    textAlign: 'center',
  },
  title: {
    color: white,
    fontSize: '15.5vw',
    fontWeight: '300',
    marginBottom: 30,
  },
  subtitle: {
    color: white,
    fontSize: '2.5vw',
    lineHeight: '3.5vw',
    fontWeight: 100,
    width: '55%',
    margin: '0 auto',
  },
  button: {
    height: '8vw',
    width: '8vw',
    lineHeight: '8vw',
    borderRadius: '50%',
    textAlign: 'center',
    cursor: 'pointer',
    color: themeColor,
    backgroundColor: white,
    margin: '0px auto',
    marginTop: 30,
    fontSize: '2vw',
  }
}

class IntroBase extends Component {

  onClick() {
    this.props.actions.nextPage()
  }

  render() {
    const { title, subtitle, titleStyle } = this.props
    return (
      <div style={styles.outer}>
        <section style={styles.inner}>
          <div style={{...styles.title, ...titleStyle}}
            dangerouslySetInnerHTML={{__html: title}} />
          <div style={styles.subtitle}
            dangerouslySetInnerHTML={{__html: subtitle}} />
          <div
            style={styles.button}
            onClick={this.onClick.bind(this)}>
            Start
          </div>
        </section>
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    app: state.app
  }
}

const dispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(IntroBase)
