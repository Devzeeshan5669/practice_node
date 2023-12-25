setTimeout(() => {
    console.log('a')
},0)
setImmediate(() => {
    console.log('c')
})
console.log('b')
// setInterval(() => {
//     console.log('c')
// },1)

// process.nextTick