const { getBaseResponse, createEsClient } = require('products-api-utils')
const es = createEsClient()
const deleteEntry = require('./helpers/delete-entry.js')

module.exports.handler = async (event) => {
  const id = event.pathParameters.id.replace(/%20/g, ' ')
  const baseResponse = getBaseResponse()
  return await deleteEntry(es, id, baseResponse)
}
