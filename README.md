# node-streamdir

Stream contents of a directory. `fs.readdir` as a stream.

```sh
npm install --save streamdir
```

## Usage

```js
var streamdir = require("streamdir");

streamdir(__dirname)
    .on("data", console.log);

// => .git, .gitignore, index.js, LICENSE, node_modules, package.json, README.md, test
```