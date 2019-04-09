import React, { Component } from 'react'
import classNames from 'classnames'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider'
import { white, deepPurple900, yellow500 } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/appActions'
import * as imageActions from '../../actions/searchImageActions'
import { connect } from 'react-redux'
import Typist from 'react-typist';

import { darkTheme } from '../../styles/thema'
import { QUERY, IMG_SIZE, CONTENT_CLASSES, THUMBNAIL_SIZE, PRESENT_IMAGES, THUMBNAIL_PATH, TYPING_OPTION } from '../../const'
import Header from '../Header'
import Background from './Background'
import Query from '../Query'
import SQL from '../SQL'
import Button from '../Button'
import lang from '../../lang.json'
import Circle from '../Circle'

const styles = {
  sliderBothEnds: {
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    fontSize: '5vh',
    transform: 'translateY(-25%)',
  }
}

class SearchImageTop extends Component {
  constructor(props) {
    super(props)
    let contents = props.searchImage.candidateImages
    this.state = {
      contents: _.map(contents, (content, i) => {
        content.className = CONTENT_CLASSES[i]
        return content
      }),
      count: 0,
      leave: false,
      start: null,
      elapsed: 0,
    }

    setTimeout(() => {
      this.appearTimer = setInterval(() => {
        const { contents, count } = this.state
        if (count < _.size(contents)) {
          this.animateTrigger()
        } else {
          clearInterval(this.appearTimer)
        }
      }, 1000)
    }, 1000)
  }

  componentWillReceiveProps(nextProps) {
    // Just finished analysis
    if (this.props.searchImage.analyzing && !nextProps.searchImage.analyzing) {
      if (this.leaveTimer) {
        clearInterval(this.leaveTimer)
      }
    }
  }

  componentWillUnmount() {
    if (this.leaveTimer) {
      clearInterval(this.leaveTimer)
    }
    if (this.appearTimer) {
      clearInterval(this.appearTimer)
    }
  }

  onSelectPresent(imageId, e) {
    const { actions } = this.props
    this.setState({ start: new Date() })
    this.leaveTimer = setInterval(this.tick.bind(this), 50)
    actions.selectPresent(imageId)
  }

  onRestart() {
    this.props.actions.restart();
    this.props.actions.imageRestart();
  }

  onCloseResult() {
    this.props.actions.close();
  }

  onShowSQL() {
    this.props.actions.showSQL()
  }

  onCloseSQL() {
    this.props.actions.closeSQL()
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
      this.leaveTimer = setInterval(this.tick.bind(this), 50)
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

  animateTrigger() {
    const { count } = this.state
    this.setState({count: count+1})
  }

  tick() {
    this.setState({ elapsed: new Date() - this.state.start })
  }

  elapsed() {
    const elapsed = Math.round(this.state.elapsed / 100)
    return (elapsed / 10).toFixed(1)
  }

  renderContents = () => {
    const { contents, count, leave } = this.state
    const { resultId, loadedImageIds } = this.props.searchImage
    const animating = count < _.size(contents)
    return _.map(_.take(contents, count), (image, i) => {
      let className = classNames(leave ? "is-center":`${image.className}`, `${animating ? "animated fadeIn":""}`)
      className = animating ? className : _.replace(className, /( hover-.* )/, " ")
      return <Circle
                key={ `select-${i}` }
                style={{zIndex: image.zIndex}}
                onClick={ this.onClick.bind(this, i) }
                onMouseOver={ this.onMouseOver.bind(this, i) }
                outerClassName={ className }>
                <img src={ image.src }
                  onLoad={ this.onImgLoaded.bind(this, image.id) }
                  onError={ this.onImgError.bind(this, image.id) }
                  />
              </Circle>
    })
  }

  renderContent(imageId, images, callback=()=>{}) {
    const { analyzing } = this.props.searchImage
    const image = _.find(images, image => image.key === imageId)
    const style = {
      height: 60,
      width: 60,
      backgroundColor: 'white'
    }
    return (
      <div className="animated zoomIn">
        <Circle
          style={{zIndex: 1000}}
          handler={ callback }
          outerClassName="is-center">
          <img className="large border-bold"
            src={ THUMBNAIL_PATH({id: imageId}) }
            />
        </Circle>
        { analyzing ?
        <div className="pulse">
          <div className="is-center" style={{...style}}/>
          <div className="is-center" style={{...style}}/>
          <div className="is-center" style={{...style}}/>
        </div>
        : null }
      </div>
    )
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
    const { resultImages, resultId, analyzing } = this.props.searchImage
    if (analyzing) {
      return (
        <div className="content-footer" style={{fontSize: '5vh'}}>
          <div className="row center-xs">
            { lang.searchImage.analyzing.footer }
          </div>
        </div>
      )
    } else if (resultId) {
      const image = _.find(resultImages, image => image.key === resultId) || {}
      return (
        <div className="content-footer">
          <div className="row center-xs"
            style={{
              width: '50vw',
              position: 'absolute',
              paddingTop: 40,
              left: 0,
              right: 0,
              margin: '0 auto',
            }}>
            <div className="col-xs-2" style={styles.sliderBothEnds}>
              <div className="box">
                Near
              </div>
            </div>
            <div className="col-xs-8">
              <div className="box">
                <Slider
                  disabled={true}
                  min={0}
                  max={100}
                  value={image.rate}/>
              </div>
            </div>
            <div className="col-xs-2" style={styles.sliderBothEnds}>
              <div className="box">
                Far
              </div>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  renderHeader() {
    const { resultId, analyzeId, analyzing, analyzed, totalSize, error } = this.props.searchImage
    if (error) {
      return (
        <Header
          title={ `${lang.error.title}`}
          subtitle={error} />
      )
    } else if (resultId) {
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
      } else if (analyzed) {
        return (
          <Header
            title={ `${lang.searchImage.analyzed.title}` }
            subtitle={ _.template(lang.searchImage.analyzed.subtitle)({size: totalSize, time: this.elapsed()}) }
            />
        )
      }
    } else {
      return (
        <Header 
          title={ lang.searchImage.select.title }
          subtitle={ lang.searchImage.select.subtitle }
          animate={ true }/>
      )
    }
    return null
  }

  renderSQL() {
    const { analyzeId, showSQL, sql } = this.props.searchImage
    if (showSQL) {
      return (
        <SQL
          header={lang.sql.header}
          body={ QUERY.similar.sql({id: analyzeId}) }
          footer={lang.sql.footer}
          backgroundColor='rgba(10, 10, 37, 0.9)'
          headerColor={white}
          bodyColor={white}
          footerColor={yellow500}
          buttonClassName="button-deep-blue"
          closeHandler={this.onCloseSQL.bind(this)}
          />
      )
    }
    return null
  }

  render() {
    const { count } = this.state
    const { app, searchImage } = this.props
    const { resultId, analyzing, analyzed, analyzeId, images, resultImages } = searchImage
    return (
      <MuiThemeProvider muiTheme={darkTheme}>
        <div className={ classNames("container", "center-gradation-blue") }>
          { this.renderHeader() }
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
          { analyzed ?
            <Button
              style={{right: '22vh'}}
              label={lang.button.sql}
              className="button-deep-purple"
              handler={this.onShowSQL.bind(this)}
              />
            : null }
          { resultId ?
            <Button
              label="Close"
              className="button-deep-purple"
              handler={ this.onCloseResult.bind(this) }
              /> : 
            !analyzing && count > 0 ? 
            <Button
              label="Restart"
              className="button-deep-purple"
              handler={this.onRestart.bind(this)}/>
              : null }
          { analyzing ? <Query text={ QUERY.similar.sql({id: analyzeId}) } type="image-search" /> : null }
          { this.renderSQL() }
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
    actions: bindActionCreators(Object.assign({}, appActions, imageActions), dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(SearchImageTop)
