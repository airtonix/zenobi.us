module.exports = async function (git) {
  await git.rm('-n', './**', ':(exclude)pr/**/*');
  await git.rm('./**', ':(exclude)pr/**/*');
}

// const del = require('del')
// module.exports = async function (git) {
//   await del(
//     '**/*',
//     '!pr/**/*'
//   )
// }
