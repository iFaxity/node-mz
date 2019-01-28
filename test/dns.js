const assert = require('assert').strict;
const dns = require('../dns');

describe('dns', () => {
  it('Promised lookupService', done => {
    dns.lookupService('127.0.0.1', 443).then(res => {
      assert.equal(res.hostname, 'localhost');
      assert.equal(res.service, 'https');
      done();
    }).catch(done);
  });
});
