const { getBaseResponse, createEsClient } = require('products-api-utils')
const search = require('./helpers/search.js')

module.exports.handler = async (event) => {
  const params = {
    p: 0,
    s: 10,
    ...event.queryStringParameters
  }
  return await search(createEsClient(), params, getBaseResponse())
}
