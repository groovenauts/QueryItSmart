export appActions from './appActions'
export searchImageActions from './searchImageActions'
export searchDocumentActions from './searchDocumentActions'

export const types = {
  // for root
  RESIZE_WINDOW: "resize_window",
  RESTART: "restart",
  SELECT_CHANNEL: "select_channel",
  // for search image
  IMG_LOADED: "img_loaded",
  IMG_LOAD_ERR: "img_load_err",
  LOAD_IMAGES: "load_images",
  SELECT_PRESENT_IMAGE: "select_present_image",
  SIMILARED_IMAGE: "simlared_image",
  SELECT_RESULT_IMAGE: "select_result_image",
  CLOSE_IMAGE_SEARCH: "close_image_search",
  // for serach document
  SEARCH_DOCUMENT_START: 'search_document_start',
  SEARCH_DOCUMENT_FINISHED: 'search_document_finished',
  SEARCH_DOCUMENT_ERROR: 'search_document_error',
  SELECT_RESULT_DOCUMENT: 'select_result_document',
}
