const { promisifyAll } = require('./util');
const zlib = require('zlib');

module.exports = promisifyAll(zlib, [
  'deflate',
  'deflateRaw',
  'gzip',
  'gunzip',
  'inflate',
  'inflateRaw',
  'unzip',
]);
