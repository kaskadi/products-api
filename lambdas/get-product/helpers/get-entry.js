const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = (es, id, baseResponse) => {
  if (!id) {
    return {
      ...baseResponse,
      statusCode: 400,
      body: JSON.stringify({ message: 'Path parameter for product ID missing... (/products/delete/{id})' })
    }
  }
  return es.get({
    index: 'products',
    id: id
  }).then(processRes(baseResponse)).catch(processErr(baseResponse))
}
