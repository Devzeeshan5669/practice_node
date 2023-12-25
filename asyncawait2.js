async function test(abc) {
    // setTimeout(() => {
    // }, 3000);
    // return `${abc}abc`
}

// async function abc(params) {
//     let res = await test('xyz')
//     console.log(res)
// }
// abc();

test('xyz').then((res) => {
    console.log(res)
})