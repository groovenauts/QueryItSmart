import _ from 'lodash'
import { types } from '../actions/index'
import { bytesToSize } from '../utils'

const initialState = {
  images: [],
  resultImages: [],
  loadedImageIds: [],
  loadErrorImageIds: [],
  showSQL: false,
  totalSize: 0,
  analyzeId: null,
  resultId: null,
  analyzing: false,
  analyzed: false,
  error: null,
}

const searchImage = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_IMAGES:
      const { images, error } = action
      return {
        ...state,
        images,
        error,
      }
    case types.SELECT_PRESENT_IMAGE:
      return {
        ...state,
        analyzeId: action.imageId,
        analyzed: false,
        analyzing: true,
        resultImages: [],
      }
    case types.SIMILARED_IMAGE: {
      const { imageId, results, totalBytesProcessed } = action
      let images = _.reject(results, image => image.key === imageId)
      images = fixPosition(images)
      return {
        ...state,
        analyzing: false,
        analyzed: true,
        analyzeId: imageId,
        resultImages: images,
        totalSize: bytesToSize(totalBytesProcessed),
      }
    }
    case types.SELECT_RESULT_IMAGE:
      return {
        ...state,
        resultId: action.imageId
      }
    case types.CLOSE_IMAGE_SEARCH:
      return {
        ...state,
        resultId: null,
      }
    case types.SEARCH_IMAGE_SQL_SHOW:
      return {
        ...state,
        showSQL: true,
      }
    case types.SEARCH_IMAGE_SQL_CLOSE:
      return {
        ...state,
        showSQL: false,
      }
    case types.SEARCH_IMAGE_RESTART:
      return {
        ...initialState,
      }
    case types.IMG_LOADED: {
      const { loadedImageIds, loadErrorImageIds } = state
      const { id } = action
      return {
        ...state,
        loadedImageIds: _.union(loadedImageIds, [id]),
        loadErrorImageIds: _.reject(loadErrorImageIds, id),
      }
    }
    case types.IMG_LOAD_ERR: {
      const { loadedImageIds, loadErrorImageIds } = state
      const { id } = action
      return {
        ...state,
        loadedImageIds: _.reject(loadedImageIds, id),
        loadErrorImageIds: _.union(loadErrorImageIds, [id]),
      }
    }
    default:
      return state
  }
}

const fixPosition = (images) => {
  const MAX_SIZE = 200
  const MIN_SIZE = 3
  const AJUST_SIZE = 3
  return _.map(images, (image, i) => {
    let size = MAX_SIZE - (i * AJUST_SIZE) | 0
    let opacity = 1 - ((Math.floor(i / 10)) / 10)
    image.size = size > MIN_SIZE ? size : MIN_SIZE
    image.opacity = opacity < 0 ? 0.1 : opacity
    image.x = _.random(0, window.innerWidth)
    image.y = _.random(0, window.innerHeight)
    return image
  })
}

export default searchImage
