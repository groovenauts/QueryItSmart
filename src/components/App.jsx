import React, { Component } from 'react'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/appActions'
import _ from 'lodash'
import Circle from './Circle'
import Intro from './intro/Intro'
import Intro2 from './intro/Intro2'
import Channel from './Channel'
import lang from '../lang.json'
import { INTRO_TIME } from '../const'

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
                    outerClassName={ leave ? "is-center leave":image.className }>
                    <img src={ image.src } />
                  </Circle>
          })
        }
      </div>
    )
  }

  render() {
    const { app } = this.props
    const { page } = app
    return (
      <div id="app">
        { page === 0 ? <Intro /> : page === 1 ? <Channel /> : <Intro2 /> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
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
