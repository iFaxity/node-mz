const assert = require('assert');

describe('fs', () => {
  const fs = require('../fs');

  it('Promised function', done => {
    fs.stat(__filename).then(() => done()).catch(done);
  });

  it('Synchronous function', () => {
    const stats = fs.statSync(__filename);
    assert(stats.isFile());
  });
});
