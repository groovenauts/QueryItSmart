import React, { Component } from 'react'
import classNames from 'classnames'
import Slider from 'material-ui/Slider'
import _ from 'lodash'
import { deepPurple900 } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/appActions'
import * as forecastActions from '../../actions/forecastActions'
import { connect } from 'react-redux'
import Circle from '../Circle'
import Button from '../Button'
import lang from '../../lang.json'
import Finished from '../Finished'
import { roundElapsed } from '../../utils'
import { TIME_MAP } from '../../const'

const AUTO_SLIDER_INTERVAL = 100

const template = _.template('<b><%= hour %></b><div style="font-size: 1.3vh;font-weight: 400;"><%= suffix %><div>')
const SCALE_MAP = {
  '6': template({hour: 6, suffix: 'am'}),
  '12': template({hour: 12, suffix: 'pm'}),
  '18': template({hour: 6, suffix: 'pm'}),
  '0': template({hour: 0, suffix: 'am'}),
}

const styles = {
  sliderPrefix: {
    top: 0,
    bottom: 0,
    margin: 'auto 0',
    borderRight: `solid 1px ${deepPurple900}`,
    marginRight: '2vh',
    userSelect: 'none',
  }
}

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      autoMode: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { hideFinished } = this.props.forecast
    if (!hideFinished && nextProps.forecast.hideFinished) {
      this.timer = setInterval(this.autoSlider.bind(this), AUTO_SLIDER_INTERVAL)
    }
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  onRestart() {
    this.props.actions.restart();
    this.props.actions.forecastRestart();
  }

  onShowSQL() {
    this.props.actions.showSQL()
  }

  onCloseFinished() {
    this.props.actions.closeFinished()
  }

  onDragStartSlider() {
    this.pauseAutoSlider()
  }

  onChangeSlider(e, value) {
    const { actions } = this.props
    actions.changeSlider(value)
  }

  restartAutoSlider() {
    const { autoMode } = this.state
    if (!autoMode) {
      this.setState({autoMode: true})
      this.timer = setInterval(this.autoSlider.bind(this), AUTO_SLIDER_INTERVAL)
    }
  }

  pauseAutoSlider() {
    const { autoMode } = this.state
    if (autoMode) {
      this.setState({autoMode: false})
      clearInterval(this.timer)
    }
  }

  autoSlider() {
    const { autoMode } = this.state
    const { actions, forecast } = this.props
    const { sliderValue } = forecast
    if (autoMode) {
      actions.changeSlider(sliderValue + 0.1 > 24 ? 0 : sliderValue + 0.1)
    }
  }

  renderFinished() {
    const { error, elapsedTime, totalSize, hideFinished } = this.props.forecast
    if (!hideFinished) {
      const subtitle = error ? error : _.template(lang.demandForecast.finished.subtitle)({
        size: totalSize || '-',
        time: roundElapsed(elapsedTime),
      })
      return (
        <Finished
          title={error ? lang.error.title : lang.demandForecast.finished.title}
          subtitle={subtitle}
          color={deepPurple900}
          backgroundColor="rgba(255,255,255,0.7)"
          buttonClassName="button-deep-purple-white"
          closeHandler={error ? this.onRestart.bind(this) : this.onCloseFinished.bind(this)}
          />
      )
    }
    return null
  }
  renderTitle() {
    return (
      <div style={{
        fontSize: '6vh',
        padding: 40,
        float: 'left',
        fontWeight: 500,
      }}>
        { lang.demandForecast.header.title }
      </div>
    )
  }
  renderSlider() {
    const { autoMode } = this.state
    const { hour, hideFinished, sliderValue } = this.props.forecast
    if (!hideFinished) {
      return null
    }
    return (
      <div className="row center-xs"
        style={{
          width: '50vw',
          position: 'absolute',
          bottom: 40,
          left: 0,
          right: 0,
          margin: '0 auto',
          fontWeight: 300,
        }}>
        <div className="col-xs-1" style={styles.sliderPrefix}>
          <div style={{
              color: deepPurple900,
            }}>
            <i className="material-icons" style={{
                fontSize: '5vh',
                lineHeight: '5vh',
              }}
              onClick={ autoMode ? this.pauseAutoSlider.bind(this) : this.restartAutoSlider.bind(this) }>
              { autoMode ? "pause" : "play_arrow" }
            </i>
          </div>
        </div>
        <div className="col-xs-9">
          <div className="box" style={{position: 'relative'}}>
            <div style={{
                color: deepPurple900,
                transform: 'translateY(70px)',
                fontWeight: 500,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                width: 'calc(100% + 8px)',
                position: 'absolute',
                transform: 'translate(-4px, 30px)',
              }}>
              { _.map(TIME_MAP, (_hour, i) => {
                return (
                  <div key={`hour-${i}`}
                    className="box"
                    style={{width: '1em'}}
                    dangerouslySetInnerHTML={{__html: SCALE_MAP[_.toString(_hour)] || ""}}>
                  </div>
                )
              }) }
            </div>
            <Slider
              min={0}
              max={24}
              value={sliderValue}
              style={{
                paddingRight: 4,
                paddingLeft: 4,
              }}
              onDragStart={ this.onDragStartSlider.bind(this) }
              onChange={ this.onChangeSlider.bind(this) }
              />
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { results, sql, hideFinished } = this.props.forecast
    return (
      <div style={{pointerEvents: 'auto'}}>
        { this.renderFinished() }
        {/*{ this.renderTitle() }*/}
        { this.renderSlider() }
        { hideFinished ?
          <Button
            label="Restart"
            className="button-deep-purple-white"
            handler={this.onRestart.bind(this)} />
          : null }
        { hideFinished ?
          <Button
            style={{right: '22vh'}}
            label={lang.button.sql}
            className="button-deep-purple-white"
            handler={this.onShowSQL.bind(this)} />
          : null }
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    forecast: state.forecast
  }
}

const dispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, appActions, forecastActions), dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(Result)
