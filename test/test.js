var test = require('tape')
  , fs = require('fs')


// read the correct qr code
var correct = fs.readFileSync('test/correct.svg')
console.log(correct)
// write qr code
// === the qr we just wrote

// test(