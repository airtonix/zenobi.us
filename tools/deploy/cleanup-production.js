const del = require('del')

module.exports = async function (git) {
  await del(
    '**/*',
    '!pr/**/*'
  )
}
