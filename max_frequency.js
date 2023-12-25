let a = [1, 2, 3, 4, 5, 1, 3, 4, 2, 1, 1, 1, 1];
let b = {};
let max = '', maxi = 0;
for (let k of a) {
    if (b[k]) b[k]++; else b[k] = 1;

    // console.log(maxi, b[k])
    if (maxi < b[k]) {
        max = k;
        maxi = b[k]
    }
}
console.log(b, maxi)
console.log(max, ':', maxi)