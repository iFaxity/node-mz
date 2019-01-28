describe('child_process', () => {
  const assert = require('assert');
  const child_process = require('../child_process');
  const testStr = 'hello world';
  const command = `echo '${testStr}'`;

  it('Promised function', done => {
    child_process.exec(command)
    .then(({ stdout }) => {
      assert.equal(testStr + '\n', stdout.toString());
      done();
    }, done);
  });

  it('Synchronous function', () => {
    const stdout = child_process.execSync(command);
    assert.equal(testStr + '\n', stdout.toString());
  });
});
