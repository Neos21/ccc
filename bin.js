#!/usr/bin/env node

const ccc = require('./ccc.js');

console.log(ccc(process.argv[2], process.argv[3], process.argv[4]) || 'Invalid Arguments');
