@ifaxity/mz
===================

## A minimal promises version of node modules built in modules

No dependencies in production & code is cut down to not take so much space.
Because node_modules hell is something i want to avoid.
This module was for private purposes but making it public wont do any harm.

Code heavily based on the [mz package](https://www.npmjs.im/mz)

------------------
## Installation:

`npm install @ifaxity/mz --save`

or if you use yarn

`yarn add @ifaxity/mz`

--------
## Usage

To use the module just require it like this:

`const mz = require('@ifaxity/mz');`

And then you can then use the module like this:

```js
const fs = require('@ifaxity/mz').fs;

// ...then use the fs module like normal but with promises.

// You can also just require a certain sub module like this.
const fs = require('@ifaxity/mz/fs');

// ...then use the module like normal but with promises.
```

-----------------
## Functions list

The built in functions and variables not promisified in this package are just proxied over so the synchronous functions and variables works.

However if the built in module doest have a function that is in a later module it wont try to promisify it. So some functions may not exist if you are in node 8 or another earlier version.

The modules & functions that are promised are:

* `child_process`
  * `exec`
  * `execFile`
* `crypto`
  * `generateKeyPair`
  * `pbkdf2`
  * `randomBytes`
  * `randomFill`
  * `scrypt`
* `dns`
  * `lookup`
  * `lookupService`
  * `resolve`
  * `resolve4`
  * `resolve6`
  * `resolveAny`
  * `resolveCname`
  * `resolveMx`
  * `resolveNaptr`
  * `resolveNs`
  * `resolvePtr`
  * `resolveSoa`
  * `resolveSrv`
  * `resolveTxt`
  * `reverse`
* `fs`
  * `access`
  * `appendFile`
  * `chmod`
  * `chown`
  * `close`
  * `copyFile`
  * `fchmod`
  * `fchown`
  * `fdatasync`
  * `fstat`
  * `fsync`
  * `ftruncate`
  * `futimes`
  * `lchmod`
  * `lchown`
  * `link`
  * `lstat`
  * `mkdir`
  * `mkdtemp`
  * `open`
  * `read`
  * `readdir`
  * `readFile`
  * `readlink`
  * `realpath`
  * `rename`
  * `rmdir`
  * `stat`
  * `symlink`
  * `truncate`
  * `unlink`
  * `utimes`
  * `write`
  * `writeFile`
* `readline`
  * `createInterface` - Modified to return a custom Interface class object but only modifies the question method, the other methods are extended.
  * `Interface` - The completer is compatible with both synchronous and promises. But not the normal callback.
    * `question`
* `zlib`
  * `brotliCompress`
  * `brotliDecompress`
  * `deflate`
  * `deflateRaw`
  * `gunzip`
  * `gzip`
  * `inflate`
  * `inflateRaw`
  * `unzip`


