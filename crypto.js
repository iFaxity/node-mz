const { promisifyAll } = require('./util');

module.exports = promisifyAll(require('crypto'), [
  'generateKeyPair',
  'pbkdf2',
  'randomBytes',
  'randomFill',
  'scrypt',
]);
