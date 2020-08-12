const processRes = require('./process-response.js')
const processErr = require('./process-error.js')

module.exports = (es, id, baseResponse) => {
  return es.delete({
    index: 'products',
    id: id
  }).then(processRes(baseResponse)).catch(processErr(baseResponse))
}
