import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/appActions'
import _ from 'lodash'
import ReCAPTCHA from './ReCAPTCHA'
import Circle from './Circle'
import Intro from './Intro/Intro'
import Intro2 from './Intro/Intro2'
import Channel from './Channel'
import lang from '../lang.json'
import { INTRO_TIME, THEME_COLOR } from '../const'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
    this.startInterval()
  }
  onWindowResize(e) {
    this.props.actions.resizeWindow(window.innerWidth, window.innerHeight)
  }

  componentDidMount() {
    this.props.actions.resizeWindow(window.innerWidth, window.innerHeight)
    window.addEventListener('resize', this.onWindowResize.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    const { finishedIntro } = this.props.app
    if (!finishedIntro && nextProps.app.finishedIntro) {
      if (this.timer) {
        clearInterval(this.timer)
      }
    } else if (finishedIntro && !nextProps.app.finishedIntro) {
      if (this.timer) {
        this.startInterval()
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  onReplacePage() {
    this.props.actions.nextIntro()
  }

  onClick() {
    this.props.actions.finshedIntro()
  }

  startInterval() {
    this.timer = setInterval(this.onReplacePage.bind(this), INTRO_TIME)
  }

  renderContents() {
    const { contents, leave } = this.state
    const { channel } = this.props.app
    return (
      <div className="content">
        { _.map(contents, (image, i) => {
          return <Circle
                    style={{zIndex: image.zIndex}}
                    key={ `channel-${i}` }
                    onClick={ this.onClick.bind(this, i) }
                    onMouseOver={ this.onMouseOver.bind(this, i) }
                    outerClassName={ leave ? "is-center":image.className }>
                    <img src={ image.src } />
                  </Circle>
          })
        }
      </div>
    )
  }

  render() {
    const { app, forecast } = this.props
    const { page, authorized } = app
    const { finished, showSQL } = forecast
    // For google map
    let style = finished && !showSQL ? {pointerEvents: 'none'} : {}
    style = _.defaults({
      backgroundColor: authorized ? '' : page === 1 ? 'black' : THEME_COLOR
    }, style)
    return (
      <div id="app" style={style}>
        { page === 0 ? <Intro /> : page === 1 ? <Channel /> : <Intro2 /> }
        <ReCAPTCHA siteKey={window.siteKey} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
    forecast: state.forecast,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
