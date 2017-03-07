import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TimelineMax, TweenMax, TweenLite } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import * as actions from '../../actions/searchImageActions'
import { IMG_SIZE, THUMBNAIL_SIZE, PRESENT_IMAGES, THUMBNAIL_PATH } from '../../const';
import { convertCoordinate, coordinateDistanceAndDegree } from '../../utils';

class Background extends Component {
  componentDidMount() {
    const { actions } = this.props
    actions.loadImages()
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { resultId, analyzing, analyzed, analyzeId, loadedRandomImages } = this.props
    return ((nextProps.searchImage.resultId && !resultId) ||
      (!nextProps.searchImage.resultId && resultId) ||
      nextProps.searchImage.analyzing !== analyzing ||
      nextProps.searchImage.analyzeId !== analyzeId ||
      nextProps.searchImage.analyzed !== analyzed ||
      nextProps.searchImage.loadedRandomImages !== loadedRandomImages)
  }

  componentDidUpdate(prevProps, prevState) {
    const { loadedRandomImages, analyzed } = this.props.searchImage
    if (loadedRandomImages && !prevProps.searchImage.loadedRandomImages ||
        analyzed && !prevProps.searchImage.analyzed) {
      this.addAnimation(this.moveAnimation.bind(this, {name: 'circle'}))
    }
  }

  onClickImage(imageId, e) {
    const { actions } = this.props
    actions.selectResultImage(imageId)
  }

  moveAnimation(selector, {target}) {
    let elements = target.findAll(selector)
    this.tl = new TimelineMax({
      repeat: -1,
      yoyo: true,
    })
    let anims = _.map(elements, element => {
      return TweenLite.fromTo(element, 60, 
        {
          x: _.random(-70, 70),
          y: _.random(-70, 70),
          rotation: _.random(-30, 30),
          yoyo: true,
        },
        {
          x: _.random(-120, 120),
          y: _.random(-120, 180),
          rotation: _.random(-60, 90),
        },
      )
    })
    this.tl.add(anims)
    return this.tl
  }

  renderRandomImages() {
    const { app, searchImage } = this.props
    const { width, height } = app
    const { analyzeId, resultId, images } = searchImage

    return _.map(images, (image, i) => {
      return (
        <div name={`circle`} key={`random-${i}`} className={ classNames("circle", "thumbnail", "fadeInSlowly") }
          style={{
            zIndex: i,
            position: 'absolute',
            top: image.y,
            left: image.x,
            height: image.size,
            width: image.size,
            lineHeight: `${image.size}px`,
            backgroundColor: `rgba(48, 35, 174, 0.3)`,
            cursor: 'default',
          }}>
          <img
            src={ THUMBNAIL_PATH({id: image.key}) }
            style={{
              height: image.size,
              width: image.size,
              margin: 0,
              opacity: image.opacity,
              borderWidth: 0,
            }}/>
        </div>
      )
    })
  }

  renderResultImages() {
    const { app, searchImage } = this.props
    const { width, height } = app
    const { analyzing, analyzeId, resultImages } = searchImage
    if (analyzing || !analyzeId) {
      return null;
    }

    return _.map(resultImages, (image, i) => {
      return (
        <div name={`circle`} key={`result${i}`} 
          className={ classNames("circle", "thumbnail", "fadeInSlowly") }
          onClick={ this.onClickImage.bind(this, image.key) }
          style={{
            zIndex: i + 100,
            position: 'absolute',
            top: image.y,
            left: image.x,
            height: image.size,
            width: image.size,
            opacity: image.opacity,
            lineHeight: `${image.size}px`,
          }}>
          <img
            className="hover"
            src={ THUMBNAIL_PATH({id: image.key}) }
            style={{
              height: image.size,
              width: image.size,
              margin: 0,
              borderWidth: 0,
            }}/>
        </div>
      )
    })
  }

  renderPulsate() {
    const style = {
      height: THUMBNAIL_SIZE,
      width: THUMBNAIL_SIZE,
    }
    return (
      <div className="pulse">
        <div className="is-center" style={style}/>
        <div className="is-center" style={style}/>
        <div className="is-center" style={style}/>
      </div>
    )
  }

  renderLayer() {
    return (
      <div className="container" 
        style={{
          backgroundColor: 'rgba(26, 35, 126, 0.9)'
        }}/>
    )
  }

  render() {
    const { analyzing, analyzeId, resultId } = this.props.searchImage
    return (
      <div className={ resultId ? "blur":""}>
        { do {
          if (analyzing) {
            { this.renderPulsate() }
            { this.renderRandomImages() }
          } else if (analyzeId || resultId) {
            { this.renderResultImages() }
          } else {
            { this.renderRandomImages() }
          }
        }}
        { resultId ? this.renderLayer() : null }
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    app: state.app,
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
  dispatchToProps
)(GSAP()(Background))
