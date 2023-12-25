// var i = 10;
// console.log(i.toString(16))

// var h = "a";
// console.log(parseInt(h, 16));

// var d = 16;
// console.log(d.toString(10));

function convertBase(value, fromBase, toBase) {
    var range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
    var fromRange = range.slice(0, fromBase);
    console.log('fromRange:', fromRange, fromBase)
    var toRange = range.slice(0, toBase);
    console.log('toRange:', toRange, toBase)
    var decValue = value.split('').reverse().reduce(function (carry, digit, index) {
        if (fromRange.indexOf(digit) === -1) throw new Error(`Invalid digit ${digit} for base ${fromBase}`)
        console.log(`test: ${carry} + ${fromRange.indexOf(digit)} * (Math.pow(${fromBase}, ${index}))`,)
        return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index));
    }, 0)
    var newValue = '';
    while (decValue > 0) {
        newValue = toRange[decValue % toBase] + newValue;
        decValue = (decValue - (decValue % toBase)) / toBase;
    }
    return newValue || '0';
}

console.log(convertBase('1000000', 10, 2))
return 0