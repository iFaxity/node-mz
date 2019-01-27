const assert = require('assert');

describe('crypto', () => {
  const crypto = require('../crypto');

  it('Promised function', done => {
    crypto.randomBytes(16).then(() => done());
  });

  it('Synchronous function', done => {
    crypto.randomBytes(16, err => {
      assert(!err);
      done();
    });
  });
});
