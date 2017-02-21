import { combineReducers } from 'redux'
import app from './appReducers'
import searchImage from './searchImageReducers'

const rootReducer = combineReducers({
  app,
  searchImage,
})

export default rootReducer
