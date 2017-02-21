import React, { Component } from 'react'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TimelineMax, TweenMax, TweenLite } from 'gsap'
import GSAP from 'react-gsap-enhancer'
import * as actions from '../../actions/searchImageActions'
import { IMG_SIZE, THUMBNAIL_SIZE, PRESENT_IMAGES, THUMBNAIL_PATH } from '../../const';
import { randomCoordinate, convertCoordinate, coordinateDistanceAndDegree } from '../../utils';

class Background extends Component {

  componentDidMount() {
    const { actions } = this.props
    actions.loadImages()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return ((nextProps.searchImage.resultId && !this.props.searchImage.resultId) ||
      (!nextProps.searchImage.resultId && this.props.searchImage.resultId) ||
      nextProps.searchImage.analyzing !== this.props.searchImage.analyzing ||
      nextProps.searchImage.analyzeId !== this.props.searchImage.analyzeId ||
      _.size(nextProps.searchImage.images) !== _.size(this.props.searchImage.images) ||
      _.size(nextProps.searchImage.resultImages) !== _.size(this.props.searchImage.resultImages))
  }

  componentDidUpdate(prevProps, prevState) {
    if (_.size(this.props.searchImage.images) > _.size(prevProps.searchImage.images) ||
      _.size(this.props.searchImage.resultImages) > _.size(prevProps.searchImage.resultImages)) {
      this.addAnimation(this.moveAnimation)
    }
  }

  onClickImage(imageId, e) {
    const { actions } = this.props
    actions.selectResultImage(imageId)
  }

  moveAnimation({target}) {
    let elements = target.findAll({name: 'circle'})
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
      const offset = _.random(-19, 80)
      const size = THUMBNAIL_SIZE + offset // min: 41, max: 140
      const rate = (size - 40) // 1 - 100
      const opacity = (rate / 100) / 2.5
      const { x, y } = randomCoordinate(width - size, height - size)
      return (
        <div name={`circle`} key={`present${i}`} className={ classNames("circle", "thumbnail") }
          style={{
            zIndex: i,
            position: 'absolute',
            top: y,
            left: x,
            height: size,
            width: size,
            lineHeight: `${size}px`,
            backgroundColor: `rgba(48, 35, 174, 0.3)`,
            cursor: 'default',
          }}>
          <img
            src={ THUMBNAIL_PATH({id: image.key}) }
            style={{
              height: size,
              width: size,
              margin: 0,
              opacity: opacity,
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
          className={ classNames("circle", "thumbnail") }
          onClick={ this.onClickImage.bind(this, image.key) }
          style={{
            zIndex: i,
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
