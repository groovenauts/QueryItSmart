import { types } from './index'

export const restart = () => {
  return { type: types.RESTART }
}

export const selectChannel = index => {
  return { type: types.SELECT_CHANNEL, index }
}

export const resizeWindow = (width, height) => {
  return {
    type: types.RESIZE_WINDOW,
    width, 
    height
  }
}
