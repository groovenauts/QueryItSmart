import superagent from 'superagent'

const defaultOptions = {
  autoPaginate: false,
  useQueryCache: false,
  useLegacySql: false,
  timeoutMs: 600000
}

export function runQuery(queryType, queryParams) {
  return new Promise((resolve, reject) => {
    superagent
      .post("/query")
      .send({
        queryType: queryType,
        queryParams: queryParams,
        options: {
          ...defaultOptions,
        }
      })
      .timeout(600000)
      .end((err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response.body)
        }
      })
    })
}

export function runStartQuery(queryType, queryParams, options={}) {
  return new Promise((resolve, reject) => {
    superagent
      .post("./startQuery")
      .send({
        queryType: queryType,
        queryParams: queryParams,
        options: {
          ...defaultOptions,
          ...options
        }
      })
      .timeout(600000)
      .end((err, response) => {
        if (err) {
          reject(err)
        } else {
          resolve(response.body)
        }
      })
    })
}
