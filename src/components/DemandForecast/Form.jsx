import React, { Component } from 'react'
import classNames from 'classnames'

import { indigo900, grey400 } from 'material-ui/styles/colors'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/forecastActions'
import { connect } from 'react-redux'
import { MONTH_LABELS, MONTH_VALUES, WEEKDAY_LABELS, WEEKDAY_VALUES, WEATHERS, TEMPERATURES } from '../../const'
import Circle from '../Circle'
import lang from '../../lang.json'

class Form extends Component {

  onChange_ = (key, e) => {
    const { actions } = this.props
    const value = e.target.value
    actions.changeParam(key, value)
  }

  onSubmit(e) {
    const { actions, forecast } = this.props
    const { param } = forecast
    actions.requestForecast(param)
  }

  renderHeader() {
    return (
      <div id="demand-forecast-header">
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box box-container"
              style={{
                position: 'absolute',
                margin: '0 auto',
                right: 0,
                left: 0,
                top: 0,
                bottom: 0,
                color: indigo900,
                wordWrap: 'breakWord',
                maxWidth: '80%',
                transform: 'translateY(14vh)',
              }}>
              <div className="title" style={{fontWeight: 500}}>
                { lang.demandForecast.header.title }
              </div>
              <div className="subtitle">
                { lang.demandForecast.header.subtitle }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderSelectField(name, value, values, labels=values) {
    let options = _.map(values, (v, i) => {
      return (
        <option key={`${name}-${i}`}
          value={v}>
          {_.get(labels, i)}
        </option>
      )
    })
    return (
      <select
        style={{color: indigo900}}
        name={name}
        value={value}
        onChange={this.onChange_.bind(this, name)}>
        { options }
      </select>
    )
  }

  renderContent() {
    const { param } = this.props.forecast
    const disabled = _.reduce(param, (ret, value, key) => {
      if (!ret && _.isNull(value)) {
        ret = true
      }
      return ret
    }, false)
    return (
      <div id="demand-forecast-content" style={{zIndex:2}}>
        <div className="row center-xs">
          <div className="col-xs-8" style={{
              backgroundColor: 'white',
              paddingLeft: 40,
              paddingRight: 40,
            }}>
            <div className="box"
              style={{
                fontSize: '2.5vw',
                paddingTop: 60,
                paddingBottom: 40,
                fontWeight: 500,
              }}>
              <div>{ lang.demandForecast.form.title }</div>
            </div>

            <div className="box box-container"
              style={{
                padding: 10,
              }}>
              <div className="row center-xs">
                <div className="col-xs-3">
                  <section className="box select-box">
                    { this.renderSelectField("month", param.month, MONTH_VALUES, MONTH_LABELS) }
                  </section>
                </div>
                <div className="col-xs-3">
                  <section className="box select-box">
                    { this.renderSelectField("weekday", param.weekday, WEEKDAY_VALUES, WEEKDAY_LABELS) }
                  </section>
                </div>
                <div className="col-xs-3">
                  <section className="box select-box">
                    { this.renderSelectField("weather", param.weather, WEATHERS) }
                  </section>
                </div>
                <div className="col-xs-3 select-box-suffix temperature-f">
                  <section className="box select-box">
                    { this.renderSelectField("temperature", param.temperature, TEMPERATURES) }
                  </section>
                </div>
              </div>
            </div>

            <div className="box"
              style={{
                paddingTop: 100,
                paddingBottom: 100,
                fontSize: 30,
                opacity: `${disabled ? "0.2":"1"}`,
              }}>
              <Circle
                onClick={this.onSubmit.bind(this)}
                innerClassName={ classNames("citibike-start-button", `${disabled ? "disabled":""}`) }
                style={{
                  position: 'absolute',
                  height: 100,
                  width: 100,
                  opacity: 1,
                  lineHeight: '100px',
                  pointerEvents: `${disabled ? "none":"auto"}`,
                }}>
                Start
              </Circle>
            </div>

          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div style={{position: 'relative', zIndex:2}}>
        { this.renderHeader() }
        { this.renderContent() }
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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  stateToProps,
  dispatchToProps,
)(Form)
