const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = (es, { p, s, q }, baseResponse) => {
  if (!q) {
    return {
      ...baseResponse,
      statusCode: 400,
      body: JSON.stringify({ message: 'Query string parameter q is missing... Please provide a valid query for your search.' })
    }
  }
  return es.search({
    index: 'products',
    body: {
      from: p,
      size: s,
      query: {
        query_string: {
          query: q
        }
      }
    }
  }).then(processRes(baseResponse)).catch(processErr(baseResponse))
}
