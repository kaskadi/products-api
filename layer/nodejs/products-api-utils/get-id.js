module.exports = event => {
  let id = event.pathParameters ? event.pathParameters.id : undefined
  id = id && id.trim().length > 0 ? id.trim() : undefined
  return id
}
