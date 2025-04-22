function arrangeCandies(jar) {
    const countMap = new Map();

    // Count the occurrences of each flavor
    for (const candy of jar) {
        if (countMap.has(candy)) {
            countMap.set(candy, countMap.get(candy) + 1);
        } else {
            countMap.set(candy, 1);
        }
    }

    let numPairs = 0;
    for (const count of countMap.values()) {
        // If any flavor has an odd count, it's not possible to form pairs
        if (count % 2 !== 0) {
            return -1;
        }
        // Calculate the number of pairs for each flavor
        numPairs += count / 2;
    }

    // Each pair contains two candies, so divide the total pairs by 2 to get the number of boxes
    return numPairs / 2;
}

const jar = [5, 8, 5, 8, 8, 8];
const result = arrangeCandies(jar);
console.log(result);  // Output should be 3