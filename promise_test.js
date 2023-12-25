// // async function callMe() {
// //     await Promise.resolve(0)
// //         .then((x) => {
// //             console.log('x',x)
// //             return x + 1
// //         })
// //         .then((x) => {
// //             console.log('x catch', x)
// //             throw new Error('My Error')
// //         })
// //         .catch(() => 2)
// //         // .then((x) => { })
// //         .then(function (x) {
            
// //         })
// //         .then((x) => {
// //             console.log('hello', x)
// //             return x + 3
// //         })
// //         .then(console.log)
// //         // .catch(console.error);
// //     // console.log(x)
// // }

// // callMe()
// // // console.log(console.log('hello'))
// // a

// // let a = 1
// // function callMe() {
// //     let a = 3
// //     console.log(a)
// // }
// // callMe()

// // async function callMe() {
// //     let x = await Promise.resolve(new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             resolve('hello world')

// //         }, 2)
// //     }))
// //     console.log(x)
// // }
// // callMe()

// async function callMe() {
//     setTimeout(() => {
//         console.log('hello world1')
//     }, 100)
    
//     setTimeout(() => {
//         console.log('hello world2')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world3')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world4')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world5')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world6')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world7')
//     }, 10)

//     setTimeout(() => {
//         console.log('hello world8')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world8')
//     }, 10)
//     setTimeout(() => {
//         console.log('hello world8')
//     }, 10)
// }
// callMe()

// function callMe() {
//     const promise1 = new Promise((resolve, reject) => {
//         resolve('promise 1');
//     });
//     promise1.then(console.log);
// }
// callMe()


const callMe = () => {
    return new Promise((resolve, reject) => {
        // resolve("testing")
        reject("testing123")
        // console.log('123123');
    })
}

process.on('rejectionHandled', (promise) => {
    // unhandledRejections.delete(promise);
    console.log('testing');
});
// console.log(callMe.call().then);
// callMe.call().then((data) => {
//     console.log(data);
// })

callMe().then((data) => {
    console.log(data);
})
// console.log( callMe());

