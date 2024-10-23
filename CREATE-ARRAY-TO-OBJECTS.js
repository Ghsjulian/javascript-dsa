/*
 * 
 Problem : Supposed you have to arrays and someone said to you 
 create a objects using thoes two arrays , the array is like 
 first array has some paires of keys and second arrays has values 
 Now you need to create an objects using those two arrays 
 let"s see and how to solve this problem 
 *
 */

const createObjects = (keys, values) => {
    var myObjects = {};
    var count = 0;
    keys.forEach(key => {
        myObjects[key] = values[count];
        count += 1;
    });
    return myObjects;
};

// Call The Functions
let keys = ["name", "city", "phone", "email", "hoby"];
let values = [
    "Ghs Julian",
    "Maulovi Bazar",
    "01302661227",
    "ghsjulian@gmail.com",
    "Coding"
];
console.log(createObjects(keys, values));
