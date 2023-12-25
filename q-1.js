/**
 * Q.1:- Days of the week are represented as three-letter strings ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun").
Write a function solution that, given a string S representing the day of the week and an integer K (between 0 and 500, inclusive), returns the day of the week that is K days later.
For example, given S = "Wed" and K = 2, the function should return "Fri".
Given S="Sat" and K = 23, the function should return "Mon".
*/



function solution(S, K) {
    // defining the array of daysArray
    let daysArray = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // find the index of week days with given day
    let index = daysArray.FindIndex(item => item === S);

    // after finding the Index of daysArray we need to add given number x into index and find the modulus with 7 because we have seven days in a daysArray array.
    return daysArray[(index + K) % 7]
}
