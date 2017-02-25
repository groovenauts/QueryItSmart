import { combineReducers } from 'redux'
import app from './appReducers'
import searchImage from './searchImageReducers'
import searchDocument from './searchDocumentReducers'
import forecast from './forecastReducers'

const rootReducer = combineReducers({
  app,
  searchImage,
  searchDocument,
  forecast,
})

export default rootReducer
