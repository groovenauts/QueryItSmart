var _ = require('lodash');

export function formatQueryResult(response) {
  return _.map(response.result.rows, function(row) {
    const values = _.map(row.f, function(value) {
      return value.v;
    });
    return _.reduce(values, function(acc, v, i) {
      acc = _.defaults(acc, { [response.result.schema.fields[i].name]: v });
      return acc;
    }, {});
  });
}

