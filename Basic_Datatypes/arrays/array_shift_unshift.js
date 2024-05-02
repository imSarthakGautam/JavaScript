// Array.push() and Array.unshift()
//the push() method adds elements to the end of an array,
// and unshift() adds elements to the beginning. Consider the following:

//unshift : 
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
console.log(romanNumerals);
// ['XIX', 'XX', 'XXI', 'XXII'] 
// i.e appends elements from begining of array.

romanNumerals.push(twentyThree);
//  ['XIX', 'XX', 'XXI', 'XXII', 'XXIII'].
//i.e. appends at end of an array


