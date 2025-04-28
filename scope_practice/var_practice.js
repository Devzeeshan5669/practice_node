// var x
// function callA() {
//     console.log(x)
//     var x =1
// }
// callA()
// callA()

/**
 * output: 
 * undefined
 * undefined
 */

// <=======================================================>
    
var x
function callA() {
    console.log(x)
    x = 1
}
callA()
callA()

/**
 * output: 
 * undefined
 * 1
 */