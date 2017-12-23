#!/usr/bin/env node

const lib = require('./lib.js');

if(lib.checker.isColourCode(process.argv[2])) {
  const parsed = lib.beautifier.beautifyColourCode(process.argv[2]);
  const converted = lib.converter.colourCodeToRGBCode(parsed);
  console.log(`ccc : [Colour Code] ${parsed} -> [RGB Code] ${converted}`);
}
else if(lib.checker.isRGBCode(process.argv[2], process.argv[3], process.argv[4])) {
  const parsed = lib.beautifier.beautifyRGBCode(process.argv[2], process.argv[3], process.argv[4]);
  const converted = lib.converter.rgbCodeToColourCode(parsed);
  console.log(`ccc : [RGB Code] ${parsed} -> [Colour Code] ${converted}`);
}
else {
  console.log('ccc : Invalid Arguments');
}
