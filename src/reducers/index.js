import { combineReducers } from 'redux'
import app from './appReducers'
import searchImage from './searchImageReducers'
import searchDocument from './searchDocumentReducers'

const rootReducer = combineReducers({
  app,
  searchImage,
  searchDocument,
})

export default rootReducer
