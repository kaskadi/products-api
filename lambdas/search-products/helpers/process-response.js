module.exports = baseResponse => res => {
  console.log(JSON.stringify(res, null, 2))
  return {
    ...baseResponse,
    body: JSON.stringify(res.body)
  }
}
