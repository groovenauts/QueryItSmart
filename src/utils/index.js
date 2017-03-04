export * from './coordinate'

export const bytesToSize = (bytes=0) => {
  const sizes = ['Bytes', 'KBs', 'MBs', 'GBs', 'TBs']
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
  if (i === 0) {
    return `${bytes} ${sizes[i]})`
  }
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
}

export const roundElapsed = (time) => {
  const elapsed = Math.round(time / 100)
  return (elapsed / 10).toFixed(1)
}

export function removeHTMLTag(str) {
  return str.replace(/<(?:.|\n)*?>/gm, '')
}

export const easeIn = (t, d, exponent=3) => {
  return Math.pow(t / d, exponent);
}
