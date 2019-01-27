const assert = require('assert');

/*describe('readline', () => {
  const stream = require('stream');
  const readline = require('../readline');

  it('.question().then()', done => {
    const input = stream.PassThrough();
    const output = stream.PassThrough();
    const rl = readline.createInterface({ input: input, output: output });

    rl.question('a').then(answer => {
      assert.equal(answer, 'b');
      done();
    });

    assert.equal(output.read(), 'a');
    input.write('b\n');
  });

  it('completer support', done => {
    function completer (line) {
      assert.equal(line, 'b');
      return Promise.resolve([['bTESTSTRING'], line]);
    }

    const input = stream.PassThrough();
    const output = stream.PassThrough();
    const bufferedOutput = '';
    const rl = readline.createInterface({ input: input, output: output, completer: completer, terminal: true });

    rl.question('a').then(answer => {
      assert.equal(answer, 'bTESTSTRING');
      done();
    });

    function onOutputData(data) {
      bufferedOutput += data.toString();

      if (bufferedOutput.match(/TESTSTRING/)) {
        input.write('\n');
        output.removeListener('data', onOutputData);
      }
    }

    output.on('data', onOutputData);
    input.write('b\t');
  });

  describe('callback support', () => {
    it('.question()', done => {
      const input = stream.PassThrough();
      const output = stream.PassThrough();
      const rl = readline.createInterface({ input: input, output: output });

      rl.question('a', answer => {
        assert.equal(answer, 'b');
        done();
      });

      assert.equal(output.read(), 'a');
      input.write('b\n');
    });

    it('completer support sync', done => {
      function completer (line) {
        assert.equal(line, 'b');
        return [['bTESTSTRING'], line];
      }

      const input = stream.PassThrough();
      const output = stream.PassThrough();
      const rl = readline.createInterface({ input: input, output: output, completer: completer, terminal: true });

      rl.question('a').then(answer => {
        assert.ok(output.read().toString().match(/TESTSTRING/));
        done();
      });

      input.write('b\t');
      input.write('\n');
    });

    it('completer support async', done => {
      function completer (line, cb) {
        assert.equal(line, 'b');
        cb(null, [['bTESTSTRING'], line]);
      }

      const input = stream.PassThrough();
      const output = stream.PassThrough();
      const rl = readline.createInterface({ input: input, output: output, completer: completer, terminal: true });

      rl.question('a').then(answer => {
        assert.ok(output.read().toString().match(/TESTSTRING/));
        done();
      });

      input.write('b\t');
      input.write('\n');
    });
  });
});*/
