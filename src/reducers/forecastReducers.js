import _ from 'lodash'
import { types } from '../actions/index'
import { bytesToSize } from '../utils'
import TEMPERATURES from '../data/average_temperatures.json'

const location = "newyork"
const unit = "fahrenheit"

const averageTemperature = (month) => _.get(TEMPERATURES, `${location}.${unit}.${month}`, 0)

const currentDate = new Date()
const temperatureAve = averageTemperature(currentDate.getMonth())

const initialState = {
  param: {
    month: new Date().getMonth()+1,
    weekday: new Date().getDay()+1,
    temperature: temperatureAve,
    weather: "sunny",
  },
  temperatureAve: temperatureAve,
  sql: null,
  searching: false,
  finished: false,
  hour: new Date().getHours(),
  results: [],
  totalSize: 0,
  basedTimeResult: {},
  startTime: null,
  finishedTime: null,
  elapsedTime: null,
  showSQL: false,
  hideFinished: false,
  error: null,
}

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case types.FORECAST_PARAM_CHANGE: {
      const { key, value } = action
      if (key === "month") {
        const ave = averageTemperature(value - 1)
        return {
          ...state,
          param: {
            ...state.param,
            temperature: ave,
          },
          temperatureAve: ave,
        }
      } else {
        return {
          ...state,
          param: {
            ...state.param,
            [key]: value
          },
        }
      }
    }
    case types.FORECAST_REQUEST_START:
      return {
        ...state,
        searching: true,
        finished: false,
        param: action.param,
        sql: action.sql,
        startTime: action.time,
      }
    case types.FORECAST_REQUEST_FINISH: {
      const { time, results, totalBytesProcessed } = action
      return {
        ...state,
        searching: false,
        finished: true,
        finishedTime: time,
        elapsedTime: time - state.startTime,
        results: results,
        basedTimeResult: basedTime(results),
        totalSize: bytesToSize(totalBytesProcessed),
      }
    }
    case types.FORECAST_REQUEST_ERROR:
      return {
        ...state,
        finishedTime: action.time,
        error: action.error,
      }
    case types.FORECAST_HOUR_CHANGE: 
    return {
      ...state,
      hour: action.hour
    }
    case types.FORECAST_FINISHED_CLOSE:
      return {
        ...state,
        hideFinished: true,
      }
    case types.FORECAT_SQL_SHOW:
      return {
        ...state,
        showSQL: true
      }
    case types.FORECAT_SQL_CLOSE:
      return {
        ...state,
        showSQL: false
      }
    case types.FORECAT_RESTART:
      return {
        ...initialState
      }
    default:
      return state
  }
}

const basedTime = (data) => {
  let result = {}
  _.times(24, hour => {
    const stations = _.filter(data, o => o.hour === hour)
    result[hour] = stations
  })
  return result
}

/**
 * @deprecated
 */
const transform = (data) => {
  let results = _.times(24, i => {
    return {
      hour: i+1,
      stations: []
    }
  })
  // Get the minimum and maximum values
  let { min, max } = _.reduce(data, (acc, data) => {
    _.each(data.times, time => {
      if (acc.min === -1) {
        acc.min = time.num
      } else if (time.num < acc.min) {
        acc.min = time.num
      } else if (time.num > acc.max) {
        acc.max = time.num
      }
    })
    return acc;
  }, {
    min: -1,
    max: 0
  })
  // Add weightLocation for heatmap
  const weighted = (current, min, max) => (current / max) * 2.0

  _.each(data, (obj, i) => {
    const stationId = obj.station_id
    _.each(obj.times, time => {
      const hour = time.hour
      const num = time.num
      results = _.map(results, ret => {
        if (ret.hour === hour) {
          // map latlng of station
          const station = _.find(stations, st => st.station_id == stationId) || {}
          ret.stations.push({
            stationId: stationId,
            latitude: station.latitude,
            longitude: station.longitude,
            num: num,
            weight: weighted(num, min, max)
          })
        }
        return ret
      })
    })
  })
  return results
}

export default forecast
