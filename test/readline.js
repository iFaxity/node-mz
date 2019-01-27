describe('readline', () => {
  const assert = require('assert').strict;
  const readline = require('../readline');
  const { PassThrough } = require('stream');

  // Used for the .question tests
  const question = 'test: ';
  const answer = 'yes';
  const completion = 'yesss';

  it('Promised .question', done => {
    const input = PassThrough();
    const output = PassThrough();
    const rl = readline.createInterface({ input, output });

    rl.question(question).then(str => {
      assert.equal(str, answer);
      done();
    });

    assert.equal(output.read().toString('utf-8'), question);
    input.write(`${answer}\n`);
  });

  it('Promised .question with promised completer', done => {
    const input = PassThrough();
    const output = PassThrough();
    let buffer = '';
    const rl = readline.createInterface({
      input,
      output,
      terminal: true,
      async completer(line) {
        assert.equal(line, answer);
        return [[completion], line];
      },
    });

    function onData(data) {
      buffer += data.toString();

      if (buffer.indexOf(completion) >= 0) {
        input.write('\n');
        output.off('data', onData);
      }
    }

    rl.question(question).then(str => {
      assert.equal(str, completion);
      done();
    });

    output.on('data', onData);
    input.write(`${answer}\t`);
  });

  it('Promised .question with sync completer', done => {
    const input = PassThrough();
    const output = PassThrough();
    let buffer = '';

    const rl = readline.createInterface({
      input,
      output,
      terminal: true,
      completer(line) {
        assert.equal(line, answer);
        return [[completion], line];
      },
    });

    function onData(data) {
      buffer += data.toString();

      if (buffer.indexOf(completion) >= 0) {
        input.write('\n');
        output.off('data', onData);
      }
    }

    rl.question(question).then(str => {
      assert.equal(str, completion);
      done();
    });

    output.on('data', onData);
    input.write(`${answer}\t`);
  });
});
