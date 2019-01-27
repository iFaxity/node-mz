const { promisifyAll } = require('./util');
const crypto = require('crypto');

module.exports = promisifyAll(crypto, [
  'pbkdf2',
  'pseudoRandomBytes',
  'randomBytes',
  // Newer functions
  'randomFill',
  'generateKeyPair',
  'scrypt',
]);
