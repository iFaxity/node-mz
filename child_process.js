const { promisifyAll } = require('./util');
const child_process = require('child_process');

module.exports = promisifyAll(child_process, [
  'exec',
  'execFile'
]);
