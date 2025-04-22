const { match } = require('node-match-path')

console.log(match('/user/:userId/test/:param', '/user/5/test/sdfsdf'))