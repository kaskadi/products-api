const { processRes, processErr } = require('products-api-utils')

module.exports = (es, id, baseResponse) => {
  return es.get({
    index: 'products',
    id: id
  })
    .then(res => res.body)
    .then(processRes(baseResponse))
    .catch(processErr(baseResponse))
}
