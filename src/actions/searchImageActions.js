import _ from 'lodash'
import { types } from './index'
import { runQuery } from './ajax'
import { QUERY } from '../const'

const wrapSelectPresent = imageId => dispatch => {
  const sql = QUERY.similar.sql({id: imageId})
  return runQuery(sql).then((res) => {
    dispatch({
      type: types.SIMILARED_IMAGE,
      imageId: imageId,
      results: res[0],
      totalBytesProcessed: _.get(res[2], 'totalBytesProcessed'),
    })
  }).catch((err) => {
    console.log("Error", err)
  })
}

export const selectPresent = imageId => dispatch => {
  dispatch({
    type: types.SELECT_PRESENT_IMAGE,
    imageId: imageId
  })
  return dispatch(wrapSelectPresent(imageId))
}

const wraploadImages = () => dispatch => {
  return runQuery(QUERY.load.sql).then((res) => {
    dispatch({
      type: types.LOAD_IMAGES,
      images: res[0],
    })
  }).catch((err) => {
    console.log("Error", err)
  })
}

export const loadImages = () => dispatch => {
  return dispatch(wraploadImages())
}

export const selectResultImage = imageId => {
  return { type: types.SELECT_RESULT_IMAGE, imageId }
}

export const close = () => {
  return { type: types.CLOSE_IMAGE_SEARCH }
}

export const imgLoaded = (id) => {
  return { type: types.IMG_LOADED, id }
}

export const imgError = (id) => {
  return { type: types.IMG_LOAD_ERR, id }
}
