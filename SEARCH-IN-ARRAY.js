/*
 *
 Problem : Supposed you have a created a website a using javascript 
 and react and you have implements the add to cart features 
 and now you have faced to problem which is you have to find the id or number 
 that is present in your cart or not ? to do this you need 
 to search in the array , so let's see how to solve this issues.
 
 *
 */

const SearchNumber = (arr, target) => {
    return arr.filter(element => target === element);
};

// Call the function here
let numbers = [50, 79, 46, 89, 23, 95];
console.log(SearchNumber(numbers, 466));
