const { promisify } = require('util');

function isDeprecated(src, method) {
  const d = Object.getOwnPropertyDescriptor(src, method);
  return d && d.get && d.get.name == 'deprecated';
}

module.exports = {
  promisify,
  promisifyAll(src, methods) {
    return Object.keys(src).reduce((acc, prop) => {
      // Prevent accessing any deprecated property.
      // It prints an annoying warning every time.
      if (!isDeprecated(src, prop)) {
        const value = src[prop];

        if (methods.includes(prop) && typeof value == 'function') {
          acc[prop] = promisify(value);
        } else {
          acc[prop] = value;
        }
      }

      return acc;
    }, {});
  },
};
