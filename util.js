const { promisify } = require('util');

module.exports = {
  promisifyAll(src, methods) {
    // Promisify all the methods and return an object
    const dest = Object.assign({}, src);

    methods.forEach(method => {
      // Only add the function if it exists in the source
      if (typeof src[method] == 'function') {
        dest[method] = promisify(src[method]);
      }
    });

    return dest;
  },
  promisify,
};
