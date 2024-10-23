/*BINARY-SEARCH.js
*
Problem : Create A Function For Binary Search
There is a function and given an array and a target number 
you shoud find the index and return it , you have a condition 
you have to search from left to right . Like start index to end index...
let's solve it!
*
*/

const BinarySearch = (arr, target) => {
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            start = start + 1;
        } else {
            end = end - 1;
        }
    }
    return -1;
};


// Call The Function Here
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;
const search = BinarySearch(arr, target);
console.log(search);
