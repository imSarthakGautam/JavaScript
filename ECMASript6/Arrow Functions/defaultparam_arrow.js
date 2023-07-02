/* setting the value parameter equal to 1. When the function comes across test cases where value has not been passed anything, 
then value will be assigned one by default. */

const increment = (number, value = 1) => number + value;

console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6 BECAUSE VALUE =1 AS DEFAULT PARAMETER