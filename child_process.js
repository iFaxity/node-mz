const { promisifyAll } = require('./util');

module.exports = promisifyAll(require('child_process'), [
  'exec',
  'execFile',
]);
