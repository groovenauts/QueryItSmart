export appActions from './appActions'
export searchImageActions from './searchImageActions'
export searchDocumentActions from './searchDocumentActions'
export forecastActions from './forecastActions'

export const types = {
  // for root
  RESIZE_WINDOW: "resize_window",
  RESTART: "restart",
  NEXT_INTRO: "next_intro",
  SELECT_CHANNEL: "select_channel",
  // for search image
  IMG_LOADED: "img_loaded",
  IMG_LOAD_ERR: "img_load_err",
  LOAD_IMAGES: "load_images",
  SELECT_PRESENT_IMAGE: "select_present_image",
  SIMILARED_IMAGE: "simlared_image",
  SELECT_RESULT_IMAGE: "select_result_image",
  CLOSE_IMAGE_SEARCH: "close_image_search",
  SEARCH_IMAGE_RESTART: "search_image_restart",
  SEARCH_IMAGE_SQL_SHOW: "search_image_sql_show",
  SEARCH_IMAGE_SQL_CLOSE: "search_image_sql_close",
  // for serach document
  SEARCH_DOCUMENT_START: 'search_document_start',
  SEARCH_DOCUMENT_FINISHED: 'search_document_finished',
  SEARCH_DOCUMENT_FINISHED_CLOSE: "search_document_finished_close",
  SEARCH_DOCUMENT_ERROR: 'search_document_error',
  SELECT_RESULT_DOCUMENT: 'select_result_document',
  SEARCH_DOCUMENT_RESTART: "search_document_restart",
  SEARCH_DOCUMENT_SQL_SHOW: "search_document_sql_show",
  SEARCH_DOCUMENT_SQL_CLOSE: "search_document_sql_close",
  // for demand forecast
  FORECAST_HOUR_CHANGE: "forecast_hour_change",
  FORECAST_PARAM_CHANGE: "forecast_param_change",
  FORECAST_REQUEST_START: "forecast_request_start",
  FORECAST_REQUEST_FINISH: "forecast_request_finish",
  FORECAST_REQUEST_ERROR: "forecast_request_error",
  FORECAST_FINISHED_CLOSE: "forecast_finished_close",
  FORECAT_RESTART: "forecast_restart",
  FORECAT_SQL_SHOW: "forecast_sql_show",
  FORECAT_SQL_CLOSE: "forecast_sql_close",
}
