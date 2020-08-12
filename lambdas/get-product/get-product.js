const { getBaseResponse, createEsClient } = require('products-api-utils')
const getEntry = require('./helpers/get.js')

module.exports.handler = async (event) => {
  return await getEntry(createEsClient(), event.pathParameters.id, getBaseResponse())
}
