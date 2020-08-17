const { getBaseResponse, createEsClient, getId } = require('products-api-utils')
const deleteEntry = require('./helpers/delete.js')

module.exports.handler = async (event) => {
  return await deleteEntry(createEsClient(), getId(event), getBaseResponse())
}
