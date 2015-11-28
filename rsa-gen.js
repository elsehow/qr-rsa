#!/usr/bin/env node 

var spawn = require('child_process').spawn

// openssl genrsa 4096 | openssl rsa -pubout

// 4096 RSA keypair
var genrsa = spawn('openssl', ['genrsa', '2048'])
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
 