const { promisifyAll } = require('./util');

module.exports = promisifyAll(require('zlib'), [
  'deflate',
  'deflateRaw',
  'gzip',
  'gunzip',
  'inflate',
  'inflateRaw',
  'unzip',
]);
