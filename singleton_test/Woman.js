var singleton = require('./Singleton.js');
console.log(singleton)
let womanObj = singleton.getInstance()
womanObj.check()