/* 
*
Create A Function which will find the max number from array 
INPUT : [23,67,98,160,560,25,76]
OUTPUT : 6678
* 
*/

const findMax1 = arr => {
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
const findMax2 = arr => {
    var max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = Math.max(max, arr[i]);
        }
    }
    return max;
};
const findMax3 = arr => {
    var max = arr[0];
    arr.forEach(number => {
        if (number > max) {
            max = number;
        }
    });
    return max;
};
// Call The Function
var number = [23, 67, 6678, 98, 160, 560, 25, 76];
// console.log(findMax1(number));
// console.log(findMax2(number));
console.log(findMax3(number));
