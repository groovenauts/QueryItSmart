import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/appActions'
import _ from 'lodash'
import SearchImage from './SearchImage/SearchImageTop'
import SearchDocument from './SearchDocument/Top'
import DemandForecast from './DemandForecast/Top'
import Circle from './Circle'
import Header from './Header'
import { CONTENT_CLASSES, CHANNEL_IMAGES } from '../const'
import lang from '../lang.json'

class Channel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents: CHANNEL_IMAGES,
      leave: false,
    }
  }

  onClick(id) {
    const { actions } = this.props
    this.setState({leave: true})
    // For animation of leave
    setTimeout(() => {
      actions.selectChannel(id)
      this.setState({leave: false})
    }, 1000)
  }

  onMouseOver(index) {
    const BASE_INDEX = 100
    const { contents } = this.state
    const id = contents[index].id
    this.setState({
      contents: _.map(contents, (content, i) => {
        content.zIndex = BASE_INDEX + i
        if (content.id === id) {
          content.zIndex = BASE_INDEX + _.size(contents)
        }
        return content
      })
    })
  }

  renderHeader() {
    const { leave } = this.state
    if (leave) {
      return null
    }
    return (
      <Header
        title={ lang.channel.title }
        subtitle={ lang.channel.subtitle }
        style={{color: 'white'}}
        animate={true} />
    )
  }

  renderContents() {
    const { contents, leave } = this.state
    return (
      <div className="content">
        { _.map(contents, (image, i) => {
          return <Circle
                    style={{zIndex: image.zIndex}}
                    key={ `channel-${i}` }
                    onClick={ this.onClick.bind(this, image.id) }
                    onMouseOver={ this.onMouseOver.bind(this, i) }
                    outerClassName={ leave ? "is-center":image.className }>
                    <img src={ image.src } />
                  </Circle>
          })
        }
      </div>
    )
  }

  renderFooter() {
    const { contents, leave } = this.state
    if (leave) {
      return null
    }
    return (
      <div className="content-footer">
        <div className="flex-container">
          {_.map(contents, (content, i) => (
            <div key={ `channel-name-${i}`} className={ classNames("flex-item") }>
              {content.name}
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    const { app } = this.props
    return (
      <div id="channel" className={app.authorized?"":"intro-blur"}>
        { do {
            if (app.channel === "image") {
              <SearchImage />
            } else if (app.channel === "text") {
              <SearchDocument />
            } else if (app.channel === "map") {
              <DemandForecast />
            } else {
              <div className={ classNames("container") } style={{ backgroundColor: 'black' }}>
                { this.renderHeader() }
                { this.renderContents() }
                { this.renderFooter() }
              </div>
            }
        }}
        { app.channel === -1 ? <a className="footer-logo" href="https://www.magellanic-clouds.com/blocks/" target="_blank" /> : null }
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
)(Channel)
