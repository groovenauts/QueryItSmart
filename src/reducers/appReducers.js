import _ from 'lodash'
import { types } from '../actions/index'

const initialState = {
  width: _.get(window, 'innerWidth', 0),
  height: _.get(window, 'innerHeight', 0),
  page: 0,
  channel: -1,
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case types.RESIZE_WINDOW:
      const { width, height } = action
      return {
        ...state,
        width,
        height
      }
    case types.RESTART:
      return {
        ...state,
        page: 0,
        channel: -1,
      }
    case types.NEXT_INTRO:
      return {
        ...state,
        page: state.page + 1 > 2 ? 0 : state.page + 1
      }
    case types.SELECT_CHANNEL:
      const { index } = action
      return {
        ...state,
        channel: index,
      }
    default:
      return state
  }
}

export default app
