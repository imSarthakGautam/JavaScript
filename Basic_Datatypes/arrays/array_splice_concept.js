//splice() allows us to remove any number of consecutive elements from anywhere in an array.

let array = ["today", "was", "not", "so", "great"];

let spl = array.splice(2, 2);
console.log("Removed elements", spl);
// Here splice()'s first parameter represents the index on the array from which to begin removing elements,

//while the second parameter indicates the number of elements to delete.
// so index2: "not" and 1 more element 'so' after it is removed.

console.log("remaining elements", array); // prints remaining elements
