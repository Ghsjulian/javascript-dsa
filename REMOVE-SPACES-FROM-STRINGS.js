/*
 *
 Problem : Supposed someone said to you that he has a 
 paragraph in english sentenes and he want to remove all the spaces from 
 the each words , so now you need to solve this problem 
 let's solve it --->
 *
 */

const RemoveSpaces = str => {
    return str.split(" ").join("").toUpperCase();
};

// Call the function here
let paragraph = `
Hello how are you ? are you fine ! let's coding and 
learn the javascrpit, I am Ghs Julian and learning advance javascrpit
`;
console.log(RemoveSpaces(paragraph));
