describe('dns', () => {
  const assert = require('assert');
  const dns = require('../dns');

  it('Promised function', done => {
    dns.lookupService('127.0.0.1', 443).then(res => {
      assert.equal(res.hostname, 'localhost');
      assert.equal(res.service, 'https');
      done();
    }, done);
  });

  it('Synchronous function', () => {
    const servers = dns.getServers();
    assert(Array.isArray(servers));
  });
});
