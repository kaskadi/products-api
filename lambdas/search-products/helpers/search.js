const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = (es, { p, s, q }, baseResponse) => {
  return es.search({
    index: 'products',
    body: {
      from: p || 0,
      size: s || 10,
      query: {
        query_string: {
          query: q
        }
      }
    }
  }).then(processRes(baseResponse)).catch(processErr(baseResponse))
}
