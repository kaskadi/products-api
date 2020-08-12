module.exports = baseResponse => err => {
  console.log(JSON.stringify(err, null, 2))
  const statusCode = err.statusCode === 404 ? 404 : 502
  const body = { message: err.statusCode === 404 ? `Product with ID ${err.body._id} not found...` : 'An error occured...' }
  return {
    ...baseResponse,
    statusCode,
    body: JSON.stringify(body)
  }
}
