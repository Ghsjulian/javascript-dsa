/*
 *
 Problem : Create A Function For Linear Search In
 An Array And It will return the element index from the array.
 INPUT : [12, 45, 76, 34, 90, 58, 75, 80]
 OUTPUT : 4
 *
 */

const LinearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
};
// Call the function here
let numbers = [12, 45, 76, 34, 90, 58, 75, 80];
let targetNumber = 90;
const searchResult = LinearSearch(numbers, targetNumber);
console.log(searchResult);
// It will return 4
