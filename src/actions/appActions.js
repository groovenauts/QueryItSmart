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

export const nextIntro = () => {
  return {
    type: types.NEXT_INTRO
  }
}

export const finshedIntro = () => {
  return {
    type: types.FINISHED_INTRO
  }
}