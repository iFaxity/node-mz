describe('crypto', () => {
  const assert = require('assert').strict;
  const crypto = require('../crypto');
  const size = 16;

  it('Promised function', done => {
    const buffer = Buffer.alloc(size);

    crypto.randomFill(buffer)
    .then(buf => {
      assert.equal(buf.length, size);
      done();
    }, done);
  });

  it('Synchronous function', () => {
    const buffer = Buffer.alloc(size);
    const buf = crypto.randomFillSync(buffer);
    assert.equal(buf.length, size);
  });
});
