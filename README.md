# ccc : Colour Code Converter

[![NPM Version](https://img.shields.io/npm/v/@neos21/ccc.svg)](https://www.npmjs.com/package/@neos21/ccc)


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


## Author

[Neo](http://neo.s21.xrea.com/) ([@Neos21](https://twitter.com/neos21))

- [GitHub - ccc](https://github.com/Neos21GitHub/ccc)
- [GitHub Pages - ccc](https://neos21github.github.io/ccc/)
- [npm - @neos21/ccc](https://www.npmjs.com/package/@neos21/ccc)


## Links

- [Neo's World](http://neo.s21.xrea.com/)
- [Corredor](http://neos21.hatenablog.com/)
- [Murga](http://neos21.hatenablog.jp/)
- [El Mylar](http://neos21.hateblo.jp/)
- [Bit-Archer](http://bit-archer.hatenablog.com/)
- [GitHub - Neos21GitHub](https://github.com/Neos21GitHub/)
