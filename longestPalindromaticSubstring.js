
var longestPalindromaticSubstring = function (s) {
    let palindromeStrings = '';

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let subStr = s.substring(i, j)
            // console.log(subStr, subStr.split('').reverse().join(''))
            if (subStr === subStr.split('').reverse().join('')) {
                if (palindromeStrings.length < subStr.length) {
                    palindromeStrings = subStr
                }
            }
        }
    }

    console.log(palindromeStrings);
}


test('abababab')