import _ from 'lodash'
import { types } from '../actions/index'

const initialState = {
  width: _.get(window, 'innerWidth', 0),
  height: _.get(window, 'innerHeight', 0),
  page: 0,
  channel: null,
  finishedIntro: false,
  authorized: !window.siteKey,
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
    case types.CAPTCHA_VERIFY:
      return {
        ...state,
        authorized: action.authorized
      }
    case types.RESTART:
      return {
        ...state,
        page: 0,
        channel: null,
      }
    case types.NEXT_INTRO:
      return {
        ...state,
        page: state.page + 1 > 2 ? 0 : state.page + 1
      }
    case types.FINISHED_INTRO:
      return {
        ...state,
        finishedIntro: true,
        page: 1,
      }
    case types.SELECT_CHANNEL:
      const { channelId } = action
      return {
        ...state,
        channel: channelId,
        finishedIntro: true,
      }
    default:
      return state
  }
}

export default app
