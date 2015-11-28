var qr = require('qr-image')
  , spawn = require('child_process').spawn

// openssl genrsa 4096 | openssl rsa -pubout

// 4096 RSA keypair
var genrsa = spawn('openssl', ['genrsa', '4096'])
var pubkey = spawn('openssl', ['rsa', '-pubout'])

genrsa.stdout 
  .pipe(process.stdout)
 
genrsa.stdout 
  .pipe(pubkey.stdin)

pubkey.stdout
  .pipe(process.stdout)
 
// write it to an svg qr code
function write_svg_qr (data, path) {
  var qr_svg = qr.image(data, { type: 'svg' });
  qr_svg.pipe(require('fs').createWriteStream(path));
  return
}
 
write_svg_qr('i luv qr', 'out.svg')