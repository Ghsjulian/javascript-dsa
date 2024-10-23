/*
 * 
 Problem : Create a function which will find double number from an array 
 and create an empty aray and push the double number in that empty array 
 and return that new new array ?
 INPUT : [23, 67, 23, 80, 76, 87, 34, 80]
 OUTPUT : [23,80]
 *
 */

const findDuplicate1 = arr => {
    var seen = new Set();
    var dublicates = [];
    for (const num of arr) {
        if (seen.has(num)) {
            if (!dublicates.includes(num)) {
                dublicates.push(num);
            }
        } else {
            seen.add(num);
        }
    }
    return dublicates;
};

const findDuplicate2 = arr => {
    var dublicates = [];
    const temp = [];
    arr.forEach(num => {
        if (!dublicates.includes(num)) {
            dublicates.push(num);
        } else {
            temp.push(num);
        }
    });
    return temp;
};

// Example usage:
const numbers = [23, 67, 23, 80, 76, 87, 34, 80];
console.log(findDuplicate1(numbers));
console.log(findDuplicate2(numbers));
