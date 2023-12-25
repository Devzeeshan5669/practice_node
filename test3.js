let arr = [
    [1, 2, 80, 5, 3, 8],
    [1, 2, 36, 5, 99, 8],
    [1, 2, 36, 5, 3, 800]
]


const calculateMax = (arr) => {

    let max = 0
    let indexValue = 0
    let arrayKey = 0

    let secondMax = 0
    let secondMaxIndexValue = 0
    let secondMaxArrayKey = 0

    arr.map((mainItem, key) => {
        mainItem.map((item, index) => {
            
            if (item > max) {
                secondMax = max
                secondMaxIndexValue = indexValue
                secondMaxArrayKey = arrayKey

                max = item
                indexValue = index
                arrayKey = key
            }
        })
    })
    return {
        max,
        maxIndex: indexValue,
        arrayKey,

        secondMax,
        secondMaxIndexValue,
        secondMaxArrayKey
    }
}

console.log(calculateMax(arr))