const { promisify } = require('util');

module.exports = {
  promisifyAll(src, methods) {
    // Promisify all the methods and return an object
    const dest = Object.assign({}, src);

    return methods.reduce((acc, method) => {
      // Only add the function if it exists in the source
      if (typeof src[method] == 'function') {
        acc[method] = promisify(src[method]);
      }
      return acc;
    }, dest);
  },
  promisify,
};
