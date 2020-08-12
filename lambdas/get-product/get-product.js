const { getBaseResponse, createEsClient, getId } = require('products-api-utils')
const getEntry = require('./helpers/get-entry.js')

module.exports.handler = async (event) => {
  return await getEntry(createEsClient(), getId(event), getBaseResponse())
}
