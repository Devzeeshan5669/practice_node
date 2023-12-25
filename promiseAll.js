let promises= [
    new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello world')
            }, 100)
    }),
    new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('hello world3')
            }, 10000)
    })
    ,
    Promise.resolve(42)
]

Promise.all(promises).then(values => {
    console.log(values)
}).catch(error => {
    console.log(error)
})