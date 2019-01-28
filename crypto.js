const { promisifyAll } = require('./util');

module.exports = promisifyAll(require('crypto'), [
  'pbkdf2',
  'pseudoRandomBytes',
  'randomBytes',
  // Newer functions
  'randomFill',
  'generateKeyPair',
  'scrypt',
]);
