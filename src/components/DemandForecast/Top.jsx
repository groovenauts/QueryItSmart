import React, { Component } from 'react'
import classNames from 'classnames'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { demandForecastTheme } from '../../styles/thema'
import { deepPurple900, yellow500, white } from 'material-ui/styles/colors'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/appActions'
import * as forecastActions from '../../actions/forecastActions'
import { connect } from 'react-redux'
import Searching from '../Searching'
import Form from './Form'
import Result from './Result'
import Map from './Map'
import Query from '../Query'
import Overlay from '../Overlay'
import Restart from '../Restart'
import lang from '../../lang'
import { QUERY, BIKE_IMAGE } from '../../const'

class Top extends Component {

  onCloseSQL() {
    const { actions } = this.props
    actions.closeSQL()
  }

  renderForm() {
    const { searching, finished } = this.props.forecast
    if (!searching && !finished) {
      return (
        <Form />
      )
    }
    return null
  }

  renderSearch() {
    const { searching, sql } = this.props.forecast
    if (searching) {
      return (
        <Searching
          imgSrc={BIKE_IMAGE}
          marqueeText={sql}
          pulseClassName="#311B92"
          textColor="#311B92"
          />
      )
    }
    return null
  }
  renderResult() {
    const { finished } = this.props.forecast
    if (finished) {
      return (
        <MuiThemeProvider muiTheme={demandForecastTheme}>
          <Result />
        </MuiThemeProvider>
      )
    }
    return null
  }

  renderSQL() {
    const { showSQL, sql } = this.props.forecast
    if (showSQL) {
      return (
        <Overlay
          header={lang.sql.header}
          body={sql}
          footer={lang.sql.footer}
          backgroundColor='rgba(10, 10, 37, 0.9)'
          headerColor={white}
          bodyColor={white}
          footerColor={yellow500}
          closeHandler={this.onCloseSQL.bind(this)}
          />
      )
    }
    return null
  }

  render() {
    const { searching, finished, param, basedTimeResult, hour, showSQL } = this.props.forecast
    const style = searching || !finished ? { backgroundColor: 'white', opacity: 0.6, zIndex: 1, } : {}
    return (
      <div id="demand-forecast" className="container" style={showSQL ? {filter: 10} :{}}>
        { !finished ? <div className="container" style={style} /> : null }
        { this.renderSQL() }
        { this.renderForm() }
        { this.renderSearch() }
        { this.renderResult() }
        <Map heatMapData={basedTimeResult ? basedTimeResult[hour] : null}/>
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
)(Top)
