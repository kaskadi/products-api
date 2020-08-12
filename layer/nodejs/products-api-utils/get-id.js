module.exports = event => {
  let id = event.pathParameters ? event.pathParameters.id : undefined
  id = id && id.replace(/%20/g, '').replace(/\+/g, '').length > 0 ? id.replace(/%20/g, '').replace(/\+/g, '') : undefined
  return id
}
