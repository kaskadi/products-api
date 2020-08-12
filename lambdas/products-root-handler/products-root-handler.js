module.exports.handler = async (event) => {
  return {
    statusCode: 400,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ message: 'Path parameter for product ID missing... (/products/{id})' })
  }
}
