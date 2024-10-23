/*
 *
 Problem : Create a function for creating selection sort 
 in an array 
 *
 */

const SelectionSort = arr => {
    var len = arr.length ;
    for (let i = 0; i < len-1; i++) {
        var minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};

// Call the function here
let num = [50, 70, 25, 85, 95, 36, 45];
let sorted = SelectionSort(num);
console.log("Sorted Array : ", sorted);
