var jsonQuery = require('json-query')

let searchString = `steve`;
var data = [
    { name: 'Steve abcd', country: 'NZ', data: 'testing' },
    { name: 'asd', country: 'NZ', data: 'testing' },
    { name: 'asd', country: 'Steve abcd', data: 'testing' }, 
    { name: 'asd', country: 'NZ', data: 'testing' }, 
    { name: 'asd', country: 'NZ', data: 'Steve abcd' }, 
    { name: 'asd', country: 'NZ', data: 'testing' }, 
    
]
let columnKeys = ['data']
if (data.length) {
    let regexString = new RegExp(`[a-z0-9!@#$%^&*(),.?":{}|<>]*${searchString}[a-z0-9!@#$%^&*(),.?":{}|<>]*`, 'ig')
    let condition  = ``
    let values = []
    columnKeys.map((keyValue, i) => {
        if (i === 0) {
            condition = condition + ` ${keyValue}~?`
        } else {
            condition = condition + ` | ${keyValue}~?`
        }
        values.push(regexString)
        
    })
    if (condition) {
        var result = jsonQuery([`[* ${condition}]`, ...values], {
            allowRegexp: true,
            data: data,
        }).value
        console.log(result)
    }

}