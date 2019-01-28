const { promisifyAll } = require('./util');

module.exports = promisifyAll(require('zlib'), [
  'brotliCompress',
  'brotliDecompress',
  'deflate',
  'deflateRaw',
  'gunzip',
  'gzip',
  'inflate',
  'inflateRaw',
  'unzip',
]);
