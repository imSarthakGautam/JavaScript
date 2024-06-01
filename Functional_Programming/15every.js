// .every() METHOD

/*
The every method works with arrays to check if every element passes a particular test. 

It returns a Boolean value - true if all values meet the criteria, false if not
*/

const numbers = [1, 5, 8, 0, 10,11];

console.log(numbers.every(function(currentValue) {
  return currentValue < 10;
}));
//returns false

const numbers2 = [1, 5, 8, 0];

console.log(numbers2.every(function(currentValue) {
  return currentValue < 10;
}));
//returns true

