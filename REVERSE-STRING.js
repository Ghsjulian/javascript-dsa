/*
*
Problem: Write a function to reverse a string.
Example Input: "hello"
Expected Output: "olleh"
Description : Reverse Atrings And Numbers Also 
*
*/

const reverseStr1 = str => {
    var newStr = "";
    var strLen = str.length;
    for (let i = 0; i < str.length; i++) {
        newStr += str[strLen - 1];
        strLen -= 1;
    }
    return newStr;
};
const reverseStr2 = str => {
    var newStr = "";
    var count = 1;
    for (let i = 0; i < str.length; i++) {
        newStr += str[str.length - count];
        count += 1;
    }
    return newStr;
};
const reverseStr3 = str => {
    return str.split("").reverse().join("");
};

let string = "GHSJULIAN";
console.log(reverseStr1(string));
console.log(reverseStr2(string));
console.log(reverseStr3(string));
