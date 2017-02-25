import _ from 'lodash'
import { types } from './index'
import { runQuery } from './ajax'
import { QUERY } from '../const'

const wrapSearchDocument = (id, sql) => dispatch => {
  return runQuery(sql).then((res) => {
    dispatch({
      type: types.SEARCH_DOCUMENT_FINISHED,
      id,
      results: res[0],
      totalBytesProcessed: _.get(res[2], 'totalBytesProcessed'),
      time: new Date()
    })
  }).catch((err) => {
    console.log("Error", err)
    dispatch({
      type: types.SEARCH_DOCUMENT_ERROR,
      id,
      err
    })
  })
}

export const searchDocument = (id, sql) => dispatch => {
  dispatch({
    type: types.SEARCH_DOCUMENT_START,
    id,
    sql,
    time: new Date(),
  })
  return dispatch(wrapSearchDocument(id, sql))
}

export const selectDocument = id => {
  return { type: types.SELECT_RESULT_DOCUMENT, id }
}

export const documentRestart = () => {
  return { type: types.SEARCH_DOCUMENT_RESTART }
}

