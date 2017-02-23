import React, { Component } from 'react'
import classNames from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/searchImageActions'
import { connect } from 'react-redux'

import { darkTheme } from '../../styles/thema'
import { QUERY, IMG_SIZE, PRESENT_NUM, CONTENT_CLASSES, THUMBNAIL_SIZE, PRESENT_IMAGES, THUMBNAIL_PATH } from '../../const'
import Header from './Header'
import Background from './Background'
import Query from './Query'
import Restart from '../Restart'
import Close from '../Close'
import lang from '../../lang.json'
import Circle from './Circle'

class SearchImageTop extends Component {
  constructor(props) {
    super(props)
    let contents = _.sampleSize(PRESENT_IMAGES, PRESENT_NUM)
    this.state = {
      contents: _.map(contents, (content, i) => {
        content.className = CONTENT_CLASSES[i]
        return content
      }),
      leave: false,
      start: null,
      elapsed: 0,
      justAnalyzed: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    // Just finished analysis
    if (this.props.searchImage.analyzing && !nextProps.searchImage.analyzing) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.setState({justAnalyzed: true})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Just finished analysis
    if (!this.props.searchImage.analyzing && prevProps.searchImage.analyzing) {
      setTimeout(() => {
        this.setState({justAnalyzed: false})
      }, 5000)
    }
  }

  onSelectPresent(imageId, e) {
    const { actions } = this.props
    this.setState({ start: new Date() })
    this.timer = setInterval(this.tick.bind(this), 50)
    actions.selectPresent(imageId)
  }

  onClick(index) {
    const { contents } = this.state
    const { actions } = this.props
    const id = contents[index].id
    this.setState({leave: true})

    // For animation of leave
    setTimeout(() => {
      actions.selectPresent(contents[index].id)
      this.setState({start: new Date()})
      this.timer = setInterval(this.tick.bind(this), 50)
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

  onClickResult() {
    this.setState({leave: false})
    this.props.actions.close()
  }

  onImgLoaded(id, e) {
    this.props.actions.imgLoaded(id)
  }

  onImgError(id, e) {
    this.props.actions.imgError(id)
  }

  tick() {
    this.setState({ elapsed: new Date() - this.state.start })
  }

  elapsed() {
    const elapsed = Math.round(this.state.elapsed / 100)
    return (elapsed / 10).toFixed(1)
  }

  renderContents = () => {
    const { contents, leave } = this.state
    const { resultId, loadedImageIds } = this.props.searchImage
    // const loaded = _.size(loadedImageIds) === _.size(contents)
                // outerClassName={ leave ? "is-center leave":`${image.className} ${loaded ? "":"bg-clear"}` }
    return _.map(contents, (image, i) => {
      return <Circle
                key={ `select-${i}` }
                imgSrc={ image.src }
                onLoad={ this.onImgLoaded.bind(this, image.id) }
                onError={ this.onImgError.bind(this, image.id) }
                onClick={ this.onClick.bind(this, i) }
                onMouseOver={ this.onMouseOver.bind(this, i) }
                outerClassName={ leave ? "is-center leave":`${image.className}` }
              />
    })
  }

  renderContent(imageId, images, callback=()=>{}) {
    const image = _.find(images, image => image.key === imageId)
    return <Circle
              imgSrc={ THUMBNAIL_PATH({id: imageId}) }
              handler={ callback }
              outerClassName="is-center"
              imgClassName="large border-bold"
            />
  }

  imageName(imageId) {
    return _.reduce(PRESENT_IMAGES, (acc, image) => {
      if (image.id === imageId) {
        acc = image.name
      }
      return acc
    }, "")
  }

  renderFooter() {
    const { resultImages, resultId } = this.props.searchImage
    if (!resultId) {
      return null
    }
    const index = _.findIndex(resultImages, image => image.key === resultId) || 0
    const rate = ((index + 1) / _.size(resultImages)) * 100
    return (
      <div className="content-footer" style={{ 'height': 200 }}>
        <div className="flex-container">
          <div className={ classNames("flex-item") }>
            <span>Near</span>
          </div>
          <div className={ classNames("flex-item") }>
            <Slider
              disabled={true}
              min={0}
              max={100}
              value={rate}
              style={{
                width: 500,
              }}/>
          </div>
          <div className={ classNames("flex-item") }>
            <span>Far</span>
          </div>
        </div>
      </div>
    )
  }

  renderHeader() {
    const { justAnalyzed } = this.state
    const { resultId, analyzeId, analyzing } = this.props.searchImage
    if (resultId) {
      return (
        <Header title={ this.imageName(analyzeId) } />
      )
    } else if (analyzeId) {
      if (analyzing) {
        return (
          <Header
            title={ `${lang.searchImage.analyzing.title}` }
            subtitle={ _.template(lang.searchImage.analyzing.subtitle)({time: this.elapsed()}) }
            />
        )
      } else if (justAnalyzed) {
        return (
          <Header
            title={ `${lang.searchImage.analyzed.title}` }
            subtitle={ _.template(lang.searchImage.analyzed.subtitle)({time: this.elapsed()}) }
            />
        )
      }
    } else {
      return (
        <Header 
          title={ lang.searchImage.select.title }
          subtitle={ lang.searchImage.select.subtitle } />
      )
    }
    return null
  }

  render() {
    const { app, searchImage } = this.props
    const { resultId, analyzing, analyzeId, images, resultImages } = searchImage
    return (
      <MuiThemeProvider muiTheme={darkTheme}>
        <div className={ classNames("container", "center-gradation-blue") }>
          <ReactCSSTransitionGroup
            transitionName="fadeinout"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            { this.renderHeader() }
          </ReactCSSTransitionGroup>
            <div className="content">
              { do {
                if (resultId) {
                  { this.renderContent(resultId, resultImages, this.onClickResult.bind(this)) }
                } else if (analyzeId) {
                  { this.renderContent(analyzeId, PRESENT_IMAGES) }
                } else {
                  { this.renderContents() }
                }
              }}
            </div>
            { this.renderFooter() }
            <Background />
            { resultId ? <Close className="hover" /> : !analyzing ? <Restart className="hover" /> : null }
            { analyzing ? <Query text={ QUERY.similar.sql({id: analyzeId}) } /> : null }
        </div>
      </MuiThemeProvider>
    )
  }
}

const stateToProps = state => {
  return {
    searchImage: state.searchImage
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
)(SearchImageTop)
