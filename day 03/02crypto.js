const crypto = require('crypto')

let str = '123456'

let md5 = crypto.createHash('md5')

const secretHash = md5.update(str,'utf-8')

const secret = secretHash.digest('hex')

console.log(secret)