const { getBaseResponse, createEsClient } = require('products-api-utils')
const search = require('./helpers/search.js')

module.exports.handler = async (event) => {
  return await search(createEsClient(), event.queryStringParameters, getBaseResponse())
}
