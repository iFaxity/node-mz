describe('fs', () => {
  const assert = require('assert');
  const fs = require('../fs');

  it('Promised function', done => {
    fs.stat(__filename).then(() => done(), done);
  });

  it('Synchronous function', () => {
    const stats = fs.statSync(__filename);
    assert(stats.isFile());
  });
});
