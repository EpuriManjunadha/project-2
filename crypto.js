const crypto=require('crypto');
const hash=crypto.createHash('sha256');
hash.update('vamsi2001');
console.log(hash.digest('hex'));