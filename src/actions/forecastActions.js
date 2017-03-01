import { types } from './index'
import { runStartQuery } from './ajax'
import { QUERY } from '../const'

const wrapRequest = (queryType, queryParams) => dispatch => {
  const options = {
    maximumBillingTier: 100,
  }
  return runStartQuery(queryType, queryParams, options).then((res) => {
    dispatch({
      type: types.FORECAST_REQUEST_FINISH,
      time: new Date(),
      results: res[0],
      totalBytesProcessed: _.get(res[1], 'totalBytesProcessed'),
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
    month: parseInt(month),
    wday: parseInt(weekday),
    temp: parseInt(temperature),
    weather
  })
  dispatch({
    type: types.FORECAST_REQUEST_START,
    param,
    sql,
    time: new Date()
  })
  return dispatch(wrapRequest("citibike", {month: month, wday: weekday, temp: temperature, weather: weather}))
}

export const changeParam = (key, value) => {
  return { type: types.FORECAST_PARAM_CHANGE, key, value }
}

export const changeHour = (hour) => {
  return { type: types.FORECAST_HOUR_CHANGE, hour }
}

export const showSQL = () => {
  return { type: types.FORECAT_SQL_SHOW }
}

export const closeSQL = () => {
  return { type: types.FORECAT_SQL_CLOSE }
}

export const closeFinished = () => {
  return { type: types.FORECAST_FINISHED_CLOSE }
}

export const forecastRestart = () => {
  return { type: types.FORECAT_RESTART }
}
