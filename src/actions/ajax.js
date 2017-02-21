import superagent from 'superagent'

export function runQuery(sqlQuery) {
  return new Promise((resolve, reject) => {
    superagent
      .post("/query")
      .send({
        options: {
          query: sqlQuery,
          autoPaginate: false,
          useQueryCache: false,
          useLegacySql: false,
          timeoutMs: 600000
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
