import _ from 'lodash'
import { types } from '../actions/index'
import { bytesToSize } from '../utils'

const initialState = {
  searching: false,
  finished: false,
  sql: null,
  results: [],
  searchId: null,
  resultId: null,
  totalSize: 0,
  startTime: null,
  finishedTime: null,
  elapsedTime: null,
  error: null,
}

const searchDocument = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_DOCUMENT_START:
      const { id, sql, time } = action
      return {
        ...state,
        searchId: id,
        sql,
        searching: true,
        startTime: time,
      }
    case types.SEARCH_DOCUMENT_FINISHED: {
      const { id, time, results, totalBytesProcessed } = action
      const _results = _.reject(results, ret => ret.id === id)
      return {
        ...state,
        searching: false,
        finished: true,
        finishedTime: time,
        resultId: _.get(_results, '0.id'),
        results: _results,
        totalSize: bytesToSize(totalBytesProcessed),
      }
    }
    case types.SEARCH_DOCUMENT_ERROR: {
      const { id, err } = action
      return {
        ...state,
        searching: false,
        finished: true,
        error: err,
      }
    }
    case types.SELECT_RESULT_DOCUMENT:
      return {
        ...state,
        resultId: action.id,
      }
    case types.SEARCH_DOCUMENT_RESTART:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default searchDocument
