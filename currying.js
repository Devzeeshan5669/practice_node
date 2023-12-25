// function curry() {
//     console.log('curry()')
//     // var add =  ()  => {
//     //     console.log('add')
//     // }
//     // return add

//     return function () {
//         console.log('closure')
//         return curry
//     }
// }

// curry()()()()()()()()


// function add(a, end = false) {
//     if (end) {
//         return a
//     } else {
//         return function (b, end) {
//             return add(a+b, end)
//         }

//     }
// }
// let addResult = add(1)(3)(8)(100, true)
// console.log(addResult)
callMe()
function callMe() {
    let a = 13
    console.log(a)
    let callMeAgain = () => {
        var a = 14
        console.log(a)
    }
    callMeAgain()
}
let a = 12
console.log(a)