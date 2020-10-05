const { getBaseResponse, createEsClient, getId } = require('products-api-utils')
const saveEntry = require('./helpers/save.js')

module.exports.handler = async (event) => {
  return await saveEntry(createEsClient(), getId(event), JSON.parse(event.body), getBaseResponse())
}
