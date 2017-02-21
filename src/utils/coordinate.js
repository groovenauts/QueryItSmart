import _ from 'lodash'

export function randomCoordinate(maxX, maxY) {
  return {
    x: _.random(maxX),
    y: _.random(maxY)
  }
}

export const convertCoordinate = (distance) => {
  return distance
}

export const coordinateDistanceAndDegree = (distance, degree, offset=0) => {
  const _window = {
    width: (window.innerWidth || document.documentElement.clientWidth || 0),
    height: (window.innerHeight || document.documentElement.clientHeight || 0),
  }
  const centerWidth = _window.width / 2
  const centerHeight = _window.height / 2
	let radian = degreesToRadians(degree)
  return {
    x: centerWidth + (Math.cos(radian) * (distance + offset)),
    y: centerHeight + (Math.sin(radian) * (distance + offset))
  }
}

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180
}

