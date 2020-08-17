const { processRes, processErr } = require('products-api-utils')

module.exports = (es, id, productData, baseResponse) => {
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
    .then(res => {
      return { message: `Product with ID ${res.body._id} successfully saved!` }
    })
    .then(processRes(baseResponse))
    .catch(processErr(baseResponse))
}
