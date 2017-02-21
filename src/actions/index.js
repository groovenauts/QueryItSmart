export appActions from './appActions'
export searchImageActions from './searchImageActions'

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
}
