const { getBaseResponse, createEsClient } = require('products-api-utils')
const deleteEntry = require('./helpers/delete-entry.js')

module.exports.handler = async (event) => {
  let id = event.pathParameters ? event.pathParameters.id : undefined
  id = id && id.trim().length > 0 ? id.trim() : undefined
  return await deleteEntry(createEsClient(), id, getBaseResponse())
}
