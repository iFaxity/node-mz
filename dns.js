const { promisifyAll } = require('./util');
const dns = require('dns');

module.exports = promisifyAll(dns, [
  'lookup',
  'resolve',
  'resolve4',
  'resolve6',
  'resolveCname',
  'resolveMx',
  'resolveNs',
  'resolveSrv',
  'resolveTxt',
  'reverse',
]);
