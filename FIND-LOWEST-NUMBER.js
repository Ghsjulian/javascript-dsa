/*
 * 
 Problem : Find the lowest number from an array 
 INPUT : [450,567,876,50,789,908]
 OUTPUT : 50
 *
 */

// Using forEach Loop
const findLowestNumber1 = arr => {
    var num = arr[0];
    arr.forEach(number => {
        if (number < num) {
            num = number;
        }
    });
    return num;
};
// Using For Loop
const findLowestNumber2 = arr => {
    var num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < num) {
            num = arr[i];
        }
    }
    return num;
};
// Using Math.min()
const findLowestNumber3 = arr => {
    var num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (num > arr[i]) {
            num = Math.min(num, arr[i]);
        }
    }
    return num;
};
// Call The Function
let numners = [450, 567, 876, 50, 789, 908];
console.log(findLowestNumber1(numners));
console.log(findLowestNumber2(numners));
console.log(findLowestNumber3(numners));
