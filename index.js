#!/usr/bin/env node 

var qr = require('qr-image')
  , exec = require('child_process').exec

// write it to an svg qr code
function write_svg_qr (data) {
  var qr_svg = qr.image(data, { 
    ec_level: 'M', 
    type: 'svg' 
  })
  qr_svg.pipe(process.stdout)
  return
}
 
// generate a 4096 RSA keypair
exec('./rsa-gen.js', function (err, pksk) {
  if (err) 
    console.log('ERR!', err)
  write_svg_qr(pksk)
  return
})
 
