import _ from 'lodash';
import QUERY_TEMPLATES from "../data/queries.json"

export const QUERY = {
  load: {
    sql: QUERY_TEMPLATES.load
  },
  similar: {
    sql: _.template(QUERY_TEMPLATES.similar)
  },
  hackerNews: {
    sql: _.template(QUERY_TEMPLATES.hackerNews)
  },
  stackOverflow: {
    sql: _.template(QUERY_TEMPLATES.stackOverflow)
  },
  citibike: {
    sql: _.template(QUERY_TEMPLATES.citibike)
  }
}

export const INTRO_TIME = 8000
export const THUMBNAIL_PATH = _.template('https://storage.googleapis.com/queryit_smart/wikimedia/images/${id}.jpg')

export const PRESENT_NUM = 3
export const CONTENT_CLASSES = [
  "is-left hover-left",
  "is-center hover-center",
  "is-right hover-right",
]

export const THUMBNAIL_SIZE = 60,
  IMG_SIZE = 240,
  DOCUMENT_IMAGE = "./images/alfabet.png",
  BIKE_IMAGE = "./images/bike.png",
  CHANNEL_IMAGES = [
    { id: "image", name: "Wikimedia Commons Images", src: './images/image.jpg', className: CONTENT_CLASSES[0] },
    { id: "text", name: "Stack Overflow Questions", src: './images/text.jpg', className: CONTENT_CLASSES[1] },
    { id: "map", name: "NYC City Bike Usage Forecast", src: './images/map.jpg', className: CONTENT_CLASSES[2] }
  ],
  PRESENT_IMAGES = [
    { id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" },
    { id: "00000359", src: "./images/00000359.jpg", name: "BEE" },
    { id: "00000595", src: "./images/00000595.jpg", name: "F1" },
    { id: "00000615", src: "./images/00000615.jpg", name: "FIREWORKS" },
    { id: "00000895", src: "./images/00000895.jpg", name: "BIRD" },
    { id: "00001410", src: "./images/00001410.jpg", name: "CHARACTOR" },
    { id: "00001435", src: "./images/00001435.jpg", name: "ILLUSTRATION" },
    { id: "00001628", src: "./images/00001628.jpg", name: "SUNSET" },
    { id: "00002269", src: "./images/00002269.jpg", name: "SIGN" },
    { id: "00004509", src: "./images/00004509.jpg", name: "TYPHOON" },
    { id: "00005020", src: "./images/00005020.jpg", name: "FISH" },
    { id: "00005318", src: "./images/00005318.jpg", name: "ISLAND" },
    { id: "00005332", src: "./images/00005332.jpg", name: "SUN FLOWER" },
    { id: "00005558", src: "./images/00005558.jpg", name: "LEGO BLOCK" },
    { id: "00005572", src: "./images/00005572.jpg", name: "CAR" },
    { id: "00005779", src: "./images/00005779.jpg", name: "ELEPHANT" },
    { id: "00005867", src: "./images/00005867.jpg", name: "OWL" },
    { id: "00005986", src: "./images/00005986.jpg", name: "SWAN" },
    { id: "00006141", src: "./images/00006141.jpg", name: "PICTURE" },
    { id: "00006205", src: "./images/00006205.jpg", name: "GRAPH" },
    { id: "00006322", src: "./images/00006322.jpg", name: "BUTTERFLY" },
    { id: "00006562", src: "./images/00006562.jpg", name: "BALLOON" },
    { id: "00006604", src: "./images/00006604.jpg", name: "HORSE" },
    { id: "00006646", src: "./images/00006646.jpg", name: "MOON" },
    { id: "00006906", src: "./images/00006906.jpg", name: "DESERT" },
    { id: "00006935", src: "./images/00006935.jpg", name: "CAT" },
    { id: "00008742", src: "./images/00008742.jpg", name: "DRAGONFLY" },
    { id: "00008782", src: "./images/00008782.jpg", name: "LUXURY LINER" },
    { id: "00009400", src: "./images/00009400.jpg", name: "CLUCULATOR" },
    { id: "10000086", src: "./images/10000086.jpg", name: "JELLYFISH" },
  ],
  MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  WEEKDAYS = ["Sunday", "Monday","Thesday","Wednesday", "Thursday", "Friday", "Saturday"],
  WEATHERS = ["Sunny", "Rain", "Snow"],
  TEMPERATURES = _.range(-10, 76),
  TYPING_OPTION = {
    cursor: {
      show: false,
      blink: true,
      element: '',
    },
  }

