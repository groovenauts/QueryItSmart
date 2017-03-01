import React, { Component } from 'react'
import classNames from 'classnames'
import Slider from 'material-ui/Slider'
import { deepPurple900 } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/appActions'
import * as forecastActions from '../../actions/forecastActions'
import { connect } from 'react-redux'
import Circle from '../Circle'
import Button from '../Button'
import Restart from '../Restart'
import lang from '../../lang.json'
import Finished from '../Finished'
import { roundElapsed } from '../../utils'

const AUTO_SLIDER_INTERVAL = 1200
const SLIDER_SCALE = 6
const START_HOUR = 6
const TIME_MAP = _.times(24, num => {
  if (num + START_HOUR >= 24) {
    return num - (24 - START_HOUR)
  } else {
    return num + START_HOUR
  }
})

const hour2index = (hour) => _.findIndex(TIME_MAP, time => time === hour)

const styles = {
  sliderPrefix: {
    top: 0,
    bottom: 0,
    margin: 'auto 0',
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
    const { actions, forecast } = this.props
    const currentHour = TIME_MAP[value | 0]
    if (currentHour !== forecast.hour) {
      actions.changeHour(currentHour)
    }
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
    const { hour } = forecast
    if (autoMode) {
      const currentIndex = hour2index(hour)
      const nextIndex = do {
        if (currentIndex >= 23) {
          0
        } else {
          currentIndex + 1
        }
      }
      actions.changeHour(TIME_MAP[nextIndex])
    }
  }

  renderFinished() {
    const { error, elapsedTime, totalSize, hideFinished } = this.props.forecast
    if (!error && !hideFinished) {
      const subtitle = _.template(lang.demandForecast.finished.subtitle)({
        size: totalSize || '-',
        time: roundElapsed(elapsedTime),
      })
      return (
        <Finished
          title={lang.demandForecast.finished.title}
          subtitle={subtitle}
          color={deepPurple900}
          backgroundColor="rgba(255,255,255,0.7)"
          closeHandler={this.onCloseFinished.bind(this)}
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
    const { hour, hideFinished } = this.props.forecast
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
                    style={{width: '1em'}}>
                    {`${ i === 0 || _.size(TIME_MAP)-1 === i || _hour % 6 === 0 ? _hour : "" }`}
                  </div>
                )
              }) }
            </div>
            <Slider
              min={0}
              max={23}
              value={_.indexOf(TIME_MAP, hour) || 0}
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
          <Restart labelColor="white" buttonColor={deepPurple900} onClick={this.onRestart.bind(this)} />
          : null }
        { hideFinished ?
          <Button
            style={{right: 220}}
            label={lang.button.sql}
            labelColor="white"
            buttonColor={deepPurple900}
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
