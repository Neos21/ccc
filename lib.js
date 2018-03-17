/**
 * Is Colour Code
 * 
 * @param {string} input Input string
 * @return {boolean} true if the argument is valid colour code
 */
function isColourCode(input) {
  // Lower Case
  input = `${input}`.toLowerCase();
  
  // Remove Sharp
  if(input.startsWith('#')) {
    input = input.slice(1);
  }
  
  // Invalid Length
  if(input.length !== 3 && input.length !== 6) {
    return false;
  }
  
  // Contains Invalid Clour Code Characters
  return input === input.replace(/[^0-9a-f]/g, '');
}

/**
 * Is RGB Code
 * 
 * @param {string | number} arg1 Argument 1 : RGB Codes or Red Colour
 * @param {string | number} arg2 Argument 2 : Green Colour or undefined
 * @param {string | number} arg3 Argument 3 : Blue Colour or undefined
 * @return {boolean} true if the arguments are valid RGB code
 */
function isRGBCode(arg1, arg2, arg3) {
  if(arg1 && !arg2 && !arg3) {
    // "ccc 10,255,30"
    const array = `${arg1}`.split(',');
    
    // Invalid Length
    if(array.length !== 3) {
      return false;
    }
    
    // Every Arguments Are Valid?
    return array.every((input) => {
      return isValidRGBCode(input);
    });
  }
  else if(arg1 && arg2 && arg3) {
    // "ccc 10, 255, 30" or "ccc 10 255 30"
    return isValidRGBCode(arg1) && isValidRGBCode(arg2) && isValidRGBCode(arg3);
  }
  else {
    // Invalid Arguments Length
    return false;
  }
  
  /**
   * Is Valid RGB Code
   * 
   * @param {string | number} input Input String
   * @return {boolean} true if the input is valid RGB code
   */
  function isValidRGBCode(input) {
    // Remove Comma And Space
    input = `${input}`.replace(/,/g, '').trim();
    return input >= 0 && input <= 255;
  }
}

/**
 * Beautify Colour Code
 * 
 * @param {string} input Input string
 * @return {string} beautified colour code : ex. '39c' -> '3399cc'
 */
function beautifyColourCode(input) {
  // Lower Case
  input = `${input}`.toLowerCase();
  
  // Remove Sharp
  if(input.startsWith('#')) {
    input = input.slice(1);
  }
  
  // Fix Shorthand : ex. '39c' => '3399cc'
  if(input.length === 3) {
    input = input
      .split('')
      .map((str) => {
        return str.repeat(2);
      })
      .join('');
  }
  
  return input;
}

/**
 * Beautify RGB Code
 * 
 * @param {string | number} arg1 Argument 1 : RGB Codes or Red Colour
 * @param {string | number} arg2 Argument 2 : Green Colour or undefined
 * @param {string | number} arg3 Argument 3 : Blue Colour or undefined
 * @return {Array<string | number>} beautified RGB codes array : ex. '15, 255, 0' -> [15, 255, 0]
 */
function beautifyRGBCode(arg1, arg2, arg3) {
  if(arg1 && !arg2 && !arg3) {
    return `${arg1}`.split(',');
  }
  else {
    return [
      `${arg1}`.replace(/,/g, '').trim(),
      `${arg2}`.replace(/,/g, '').trim(),
      `${arg3}`.replace(/,/g, '').trim()
    ];
  }
}

/**
 * Colour Code To RGB Code
 * 
 * @param {string} code Colour Code : ex. '1f2a3c'
 * @return {Array<string | number>} RGB codes array : ex. [15, 255, 0]
 */
function colourCodeToRGBCode(code) {
  const codeR = `${code}`.substr(0, 2);
  const codeG = `${code}`.substr(2, 2);
  const codeB = `${code}`.substr(4, 2);
  const r = parseInt(codeR, 16);
  const g = parseInt(codeG, 16);
  const b = parseInt(codeB, 16);
  return [r, g, b];
}

/**
 * RGB Code To Colour Code
 * 
 * @param {Array<string | number>} rgb RGB Code Array : ex. [15, 255, 0]
 * @return {string} Colour code : ex. '#1f2a3c'
 */
function rgbCodeToColourCode(rgb) {
  const codeR = decimalToHex(rgb[0]);
  const codeG = decimalToHex(rgb[1]);
  const codeB = decimalToHex(rgb[2]);
  return `#${codeR}${codeG}${codeB}`;
  
  /**
   * Decimal To Hex
   * 
   * @param {string | number} decimal Decimal value : ex. 10
   * @return {string} hex value : ex. '0a'
   */
  function decimalToHex(decimal) {
    let hex = Number(decimal).toString(16);
    return `0${hex}`.substr(-2);
  }
}

module.exports = {
  checker: {
    isColourCode: isColourCode,
    isRGBCode: isRGBCode
  },
  beautifier: {
    beautifyColourCode: beautifyColourCode,
    beautifyRGBCode: beautifyRGBCode
  },
  converter: {
    colourCodeToRGBCode: colourCodeToRGBCode,
    rgbCodeToColourCode: rgbCodeToColourCode
  }
};
