// var x = function () { return true };
// var y = new function () {
//     // this.test = 1;
//     return true
// }
// console.log(x, x.prototype) // directly saves reference of function
// console.log(y, y.prototype) // its and object that store the reference of function class 

let sum = new Function('a', 'b', 'console.log(a,b);return a + b');

console.log(sum(1, 2));