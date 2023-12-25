function split(str) {
    return str.split('')
}

function reverse(array) {
    return array.reverse()
}

function join(arr) {
    return arr.join('')
}

// const compose = (...functions) => (str) => {
//     console.log(functions.reverse(), str)

//     // functions.reverse().forEach((func) => {
//     //     console.log(func)
//     //     str = func(str)
//     // })
//     return str
// }

const compose = (...functions) => (str) => functions.reduceRight((acc, currFunc) => currFunc(acc), str)




console.log(compose(join, reverse, split)('hello'))