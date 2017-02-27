import _ from 'lodash'
import { types } from '../actions/index'
import { bytesToSize } from '../utils'
// import stations from '../config/stations'

const initialState = {
  param: {
    month: _.random(1, 12),
    weekday: _.random(1, 7),
    temperature: _.random(-5, 25),
    weather: _.random(0, 2),
  },
  sql: null,
  searching: false,
  finished: false,
  hour: new Date().getHours(),
  results: [],
  basedTimeResult: {},
  startTime: null,
  finishedTime: null,
  elapsedTime: null,
  showSQL: false,
  error: null,
}

const forecast = (state = initialState, action) => {
  switch (action.type) {
    case types.FORECAST_PARAM_CHANGE: {
      const { key, value } = action
      return {
        ...state,
        param: {
          ...state.param,
          [key]: value
        },
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
