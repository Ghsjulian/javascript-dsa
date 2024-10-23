/*
 * 
 Problem : Supposed your friend has given you an array 
 and in that array has different type of data like Boolean,Strings,Null,NaN,Number,Array,Objects,function
 You have to detect each element and identify what is that exactly and then return them
 let's try solve it!
 *
 */

const DetectTheValue = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`\n[${i}] ::: ${arr[i]} --> ${typeof arr[i]}`);
    }
};

const data = [
    12,
    {},
    [],
    true,
    1.5,
    "Ghs Juian",
    null,
    NaN,
    typeof 1,
    () => {
        console.log("This Is A Function");
    },
    class User {
        static getUser() {
            console.log("My Name Is Ghs Julian");
        }
    }
];
DetectTheValue(data);
