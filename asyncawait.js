// const uno = () => {
//     return 'I am first'
// }

// const dos =  () => {
//     setTimeout(() => {
//         return 'I am two'
//     }, 3000)
// }

// const tres = () => {
//     return 'I am three'
// }

// const callMe = async () => {
//     let valOne = uno()
//     console.log(valOne)
    
//     let two = dos()
    
//     console.log(two)
    
//     let valThree = tres()
//     console.log(valThree)
// }

// callMe()

async function callMe() {
    console.log('hello')
    callMeSecondTime().then((value) => {

        console.log(value)
    })
    return 'hello world'
}
function callMeSecondTime() {
    return 'hello world 2'
}

callMe()
// callMe().then(value => {
//     console.log(value)
// })
// let value = await callMe()
// callMeSecondTime.then((value) => {
//     console.log(value)
// })
// console.log(callMeSecondTime())