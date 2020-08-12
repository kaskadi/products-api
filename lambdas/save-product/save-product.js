const { getBaseResponse, createEsClient } = require('products-api-utils')
const saveEntry = require('./helpers/save.js')

module.exports.handler = async (event) => {
  return await saveEntry(createEsClient(), event.pathParameters.id.replace(/%20/g, ' ').replace(/\+/g, ' '), JSON.parse(event.body), getBaseResponse())
}
