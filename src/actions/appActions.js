import superagent from 'superagent'
import { types } from './index'

export const restart = () => {
  return { type: types.RESTART }
}

export const recaptchaVerify = value => dispatch => {
  superagent
    .post("/")
    .send({
      'g-recaptcha-response': value,
    })
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, response) => {
      if (err) {
        dispatch({
          type: types.CAPTCHA_VERIFY,
          authorized: false,
        })
      } else {
        dispatch({
          type: types.CAPTCHA_VERIFY,
          authorized: response.body.success,
        })
      }
    })
}

export const selectChannel = channelId => {
  return { type: types.SELECT_CHANNEL, channelId }
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