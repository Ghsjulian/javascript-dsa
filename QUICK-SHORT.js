/*
 *
 Problem : Create a function for quick short , 
 INPUT : [15, 65, 87, 23, 0, 70, 95, 35]
 OUTPUT : [0, 15, 23, 35, 65, 70, 87, 95]
 *
 */

const QuickShort = arr => {
    if (arr.length <= 1) {
        return arr;
    }
    var start = arr[0];
    var left = [];
    var right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < start) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    left = QuickShort(left);
    right = QuickShort(right);
    let res = left.concat([start], right);
    return res;
};

// Call the array
let numbers = [15, 65, 87, 23, 0, 70, 95, 35];
let sortedArray = QuickShort(numbers);
console.log(sortedArray);
