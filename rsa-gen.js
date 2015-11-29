#!/usr/bin/env node 

var spawn = require('child_process').spawn


// generates a private key
var genrsa = spawn('openssl', ['genrsa', '2048'])
// generates a public key given a private key
var pubkey = spawn('openssl', ['rsa', '-pubout'])

// private key -> stdout
genrsa.stdout 
  .pipe(process.stdout)
 
// private key -> pubkey generator
genrsa.stdout 
  .pipe(pubkey.stdin)

// pubkey generator -> stdout
pubkey.stdout
  .pipe(process.stdout)
 