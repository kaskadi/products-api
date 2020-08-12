const { getBaseResponse, createEsClient } = require('products-api-utils')
const deleteEntry = require('./helpers/delete.js')

module.exports.handler = async (event) => {
  return await deleteEntry(createEsClient(), event.pathParameters.id, getBaseResponse())
}
