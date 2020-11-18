# @neos21/ccc : Colour Code Converter

[![NPM Version](https://img.shields.io/npm/v/@neos21/ccc.svg)](https://www.npmjs.com/package/@neos21/ccc) [![GPR Version](https://img.shields.io/github/package-json/v/neos21/ccc?label=github)](https://github.com/Neos21/ccc/packages/327426)

__[Demo Page Here](https://neos21.github.io/ccc/)__


## CLI

### Installation

```sh
$ npm install -g @neos21/ccc
```

### How To Use

```sh
# Colour Code
$ ccc 39c        # -> 51,153,204
$ ccc ff8000     # -> 255,128,0
$ ccc '#007AFF'  # -> 0,122,255

# RGB Code
$ ccc 0 128 255  # -> #0080ff
$ ccc 255,30,48  # -> #ff1e30
```


## API

### Installation

```sh
$ npm install --save @neos21/ccc
```

### How To Use

```javascript
const ccc = require('@neos21/ccc');

// Colour Code
ccc('39c');          // -> [ 51, 153, 204 ]
ccc('ff8000');       // -> [ 255, 128, 0 ]
ccc('#007AFF');      // -> [ 0, 122, 255 ]

// RGB Code
ccc('0, 128, 255');  // -> '#0080ff'
ccc([255, 30, 48]);  // -> '#ff1e30'
```


## Links

- [Neo's World](https://neos21.net/)
- [GitHub - Neos21](https://github.com/Neos21/)
- [GitHub - ccc](https://github.com/Neos21/ccc)
- [GitHub Pages - @neos21/ccc : Colour Code Converter](https://neos21.github.io/ccc/)
- [npm - @neos21/ccc](https://www.npmjs.com/package/@neos21/ccc)
