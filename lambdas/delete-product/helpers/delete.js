const { processRes, processErr } = require('products-api-utils')

module.exports = (es, id, baseResponse) => {
  return es.delete({
    index: 'products',
    id: id
  })
    .then(res => {
      return { message: `Product with ID ${res.body._id} successfully deleted!` }
    })
    .then(processRes(baseResponse))
    .catch(processErr(baseResponse))
}
