const readline = require('readline');

function promisifyCompleter(completer) {
  return (line, callback) => {
    const res = completer(line);

    // Check if res is a thenable
    if (typeof res.then != 'function') {
      return callback(null, res);
    }

    res.catch(callback).then(_ => callback(null, _));
  }
}

class AsyncInterface extends readline.Interface {
  constructor(stdin, stdout, completer, term) {
    if (arguments.length == 1) {
      const opts = Object.assign({}, stdin);

      if (typeof stdin.completer == 'function') {
        opts.completer = promisifyCompleter(stdin.completer);
      }

      super(opts);
    } else {
      if (typeof completer == 'function') {
        completer = promisifyCompleter(completer);
      }

      super(stdin, stdout, completer, term);
    }
  }

  question(question) {
    return new Promise(resolve => super.question(question, resolve));
  }
}

Object.assign(exports, readline, {
  Interface: AsyncInterface,
  createInterface: (...args) => new AsyncInterface(...args),
})
