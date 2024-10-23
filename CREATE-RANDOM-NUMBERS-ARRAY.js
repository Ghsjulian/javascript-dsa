/*
 *
 Problem : Create a function which will create an array 
 and store the random numbers , it will create 500 numbers 
 and it will ignore all existing numbers from the array 
 
 *
 */

const createArray = len => {
    const numbers = [];
    while (numbers.length + 1 < len) {
        let num = Math.floor(Math.random() * len);
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
};
// Call The Function Here
console.log(createArray(500));
