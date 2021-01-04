const { getBaseResponse } = require('products-api-utils')

module.exports.handler = async (event) => {
  return {
    ...getBaseResponse(),
    statusCode: 400,
    body: JSON.stringify({ message: 'Path parameter for product ID missing... (/products/{id})' })
  }
}
