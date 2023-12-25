function maxSpecialDifference(k) {
    const n = k.length;
    let maxDiff = -1;

    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            for (let c = b + 1; c < n; c++) {
                for (let d = c + 1; d < n; d++) {
                    const diff1 = Math.abs(k[a] - k[b]);
                    const diff2 = Math.abs(k[c] - k[d]);
                    const specialDiff = Math.abs(diff1 - diff2);
                    maxDiff = Math.max(maxDiff, specialDiff);
                }
            }
        }
    }

    return maxDiff;
}

const inputArray = [3, 2, 1, 4, 5, 6];
const output = maxSpecialDifference(inputArray);
console.log(output);  // Output should be 28