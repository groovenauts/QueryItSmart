import _ from 'lodash'
import { types } from './index'
import { runQuery, runStartQuery } from './ajax'
import { QUERY } from '../const'

const wrapSearchDocument = (queryType, id, sql) => dispatch => {
  const options = {
    maximumBillingTier: 100,
  }
  return runStartQuery(queryType, {id: id}, options).then((res) => {
    dispatch({
      type: types.SEARCH_DOCUMENT_FINISHED,
      id,
      results: _.map(res[0], (doc, i) => {
        doc.body = doc.body.replace(/<[^>]+>/g, "").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&amp;/g, "&").replace(/&[0-9a-zA-Z]+;/, "");
        return doc;
      }),
      totalBytesProcessed: _.get(res[1], 'totalBytesProcessed'),
      time: new Date()
    })
  }).catch((err) => {
    console.log("Error", err)
    dispatch({
      type: types.SEARCH_DOCUMENT_ERROR,
      id,
      err: JSON.stringify(err),
    })
  })
}

export const searchDocument = (queryType, id, sql, category) => dispatch => {
  dispatch({
    type: types.SEARCH_DOCUMENT_START,
    id,
    sql,
    category,
    time: new Date(),
  })
  return dispatch(wrapSearchDocument(queryType, id, sql))
}

export const selectDocument = id => {
  return { type: types.SELECT_RESULT_DOCUMENT, id }
}

export const showSQL = () => {
  return { type: types.SEARCH_DOCUMENT_SQL_SHOW }
}

export const closeSQL = () => {
  return { type: types.SEARCH_DOCUMENT_SQL_CLOSE }
}

export const closeFinished = () => {
  return { type: types.SEARCH_DOCUMENT_FINISHED_CLOSE }
}
export const documentRestart = () => {
  return { type: types.SEARCH_DOCUMENT_RESTART }
}

