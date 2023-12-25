let arr = ['a', 55, 66, 24, 23, 'b', 53, 1, 't']
let data = arr.sort((a, b) => {
    if (typeof a === 'number') {
        if (typeof b === 'number') {
          return a - b
        } else if (typeof b === 'string') {
            return b 
        } else {
            return a
        }
    } else if (typeof a === 'string') {
        if (typeof b === 'number') {
            return b
        } else if (typeof b === 'string') {
            return a.localeCompare(b)
        } else {
            return b
        }
    }
}).sort()
console.log(data)