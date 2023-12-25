function A () {
    this.callable = () => {
        console.log('hello world')
    }
}

A.prototype.callable2 = function () {
    console.log('hello world 2')
}
// console.log(A.prototype)
console.log(A.__proto__)
let obj1 = new A();

// obj1.callable2()

var proto = Object.getPrototypeOf(obj1);  // returns Student's prototype object

console.log(proto)
