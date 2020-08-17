module.exports = event => event.pathParameters.id.replace(/%20/g, ' ').replace(/\+/g, ' ')
