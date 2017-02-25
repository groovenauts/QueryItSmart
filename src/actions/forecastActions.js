import { types } from './index'
import { runStartQuery } from './ajax'
import { QUERY } from '../const'

const wrapRequest = (sql) => dispatch => {
  const options = {
    maximumBillingTier: 3,
  }
  return runStartQuery(sql, options).then((res) => {
    dispatch({
      type: types.FORECAST_REQUEST_FINISH,
      time: new Date(),
      results: res[0],
      totalBytesProcessed: _.get(res[2], 'totalBytesProcessed'),
    })
  }).catch((err) => {
    console.log("Error", err)
    dispatch({
      type: types.FORECAST_REQUEST_ERROR,
      time: new Date(),
    })
  })
}

export const requestForecast = param => dispatch => {
  const { month, weekday, temperature, weather } = param
  const sql = QUERY.citibike.sql({
    month,
    wday: weekday,
    temp: temperature,
    weather
  })
  dispatch({
    type: types.FORECAST_REQUEST_START,
    param,
    sql,
    time: new Date()
  })
  return dispatch(wrapRequest(sql))
}

export const changeParam = (key, value) => {
  return { type: types.FORECAST_PARAM_CHANGE, key, value }
}

export const changeHour = (hour) => {
  return { type: types.FORECAST_HOUR_CHANGE, hour }
}

export const forecastRestart = () => {
  return { type: types.FORECAT_RESTART }
}
