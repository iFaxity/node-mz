const readline = require('readline');

class AsyncInterface extends readline.Interface {
  constructor(stdin, stdout, completer, term) {
    if (arguments.length == 1) {
      super(stdin);
    } else {
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
