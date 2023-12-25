var performance = require('jsperf');
// let arr = [
//     {
//         name: 'Usman'
//     },
//     {
//         name: 'Hamza'
//     },
//     {
//         name: 'Ali'
//     },
//     {
//         name: 'Abaid'
//     },
// ]

// let copyArr = arr.forEach((element) => {
//     element.name = `Developer ${element.name}`
//     return element
// })
// console.log(arr, copyArr)

const myAwesomeArray = [1, 2, 3, 4, 5]

// const startForEach = new Date().getTime()
console.log(new Date().getMilliseconds())
myAwesomeArray.forEach(x => (x + x) * 10000000000)
console.log(new Date().getMilliseconds())

// const endForEach = performance.now()
// console.log(`Speed [forEach]: ${startForEach} miliseconds`)
console.log(new Date().getMilliseconds())

// const startMap = new Date().getMilliseconds()
myAwesomeArray.map(x => (x + x) * 10000000000)
console.log(new Date().getMilliseconds())

// const endMap = performance.now()
// console.log(`Speed [map]: ${star} miliseconds`)