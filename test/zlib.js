describe('zlib', () => {
  const assert = require('assert').strict;
  const zlib = require('../zlib');
  const testStr = 'zlibteststring';

  it('Promised function', done => {
    // Use promises to chain the test
    zlib.gzip(testStr)
    .then(zlib.unzip, done)
    .then(buf => {
      assert.equal(testStr, buf.toString());
      done();
    }, done);
  });

  it('Synchronous function', () => {
    const compressed = zlib.gzipSync(testStr);
    const buf = zlib.unzipSync(compressed);

    assert.equal(testStr, buf.toString());
  });
});
