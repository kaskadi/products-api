const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = (es, id, productData, baseResponse) => {
  if (!id) {
    return {
      ...baseResponse,
      statusCode: 400,
      body: JSON.stringify({ message: 'Path parameter for product ID missing... (/products/{id})' })
    }
  }
  if (!productData) {
    return {
      ...baseResponse,
      statusCode: 400,
      body: JSON.stringify({ message: 'Request body missing: no product data to save...' })
    }
  }
  const baseParams = {
    index: 'products',
    id
  }
  return es.exists(baseParams)
    .then(res => res.statusCode !== 404 ? es.update({ ...baseParams, body: { doc: productData } }) : es.index({ ...baseParams, body: productData }))
    .then(processRes(baseResponse))
    .catch(processErr(baseResponse))
}
