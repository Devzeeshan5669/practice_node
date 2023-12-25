// function findUniqueSubstring(str) {
//     let longestSubstring = '';
//     let currentSubstring = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         let charIndex = currentSubstring.indexOf(char);
//         console.log('charIndex:', charIndex )
//         if (charIndex !== -1) {
//             console.log('charIndex:', charIndex +1)
//             currentSubstring = currentSubstring.substring(charIndex + 1);
//             console.log('currentSubstring:', currentSubstring)
//         }

//         currentSubstring += char;

//         if (currentSubstring.length > longestSubstring.length) {
//             longestSubstring = currentSubstring;
//         }
//     }

//     return longestSubstring;
// }

// console.log(findUniqueSubstring('helloUsman'));


function findUniqueSubstring(str) {
    if (!str || str.length === 0) {
        return '';
    }
    
    let longestSubstring = '';
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = i;

        if (i - start + 1 > longestSubstring.length) {
            longestSubstring = str.substring(start, i + 1);
        }
    }

    return longestSubstring;
}

console.log(findUniqueSubstring('helloUsman'));
console.log(findUniqueSubstring('thisismymobilenumber'));
