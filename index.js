const lib = require('./lib.js');

/**
 * Colour Code Converter
 * 
 * @param {string | number | Array<string | number>} arg1 Colour Code or RGB Codes String or RGB Code Array
 * @param {string | number} arg2 Green Colour or undefined
 * @param {string | number} arg3 Blue Colour or undefined
 * @return {string | Array<number>} Colour Code or RGB Codes or null : ex. '#1f2a3c' or 'rgb(15, 255, 0)'
 */
function ccc(arg1, arg2, arg3) {
  if(arg1 && !arg2 && !arg3) {
    // One Argument
    if(typeof arg1 === 'string' && lib.checker.isColourCode(arg1)) {
      // Colour Code
      const parsed = lib.beautifier.beautifyColourCode(arg1);
      return lib.converter.colourCodeToRGBCode(parsed);
    }
    else if(lib.checker.isRGBCode(arg1)) {
      // RGB Code
      const parsed = lib.beautifier.beautifyRGBCode(arg1);
      return lib.converter.rgbCodeToColourCode(parsed);
    }
  }
  else if(arg1 && arg2 && arg3 && lib.checker.isRGBCode(arg1, arg2, arg3)) {
    // Three Arguments : RGB Code
    const parsed = lib.beautifier.beautifyRGBCode(arg1, arg2, arg3);
    return lib.converter.rgbCodeToColourCode(parsed);
  }
  
  // Invalid Values
  return null;
}

module.exports = ccc;
