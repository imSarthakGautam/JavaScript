//You can search for the opposite of the \w with \W.
// Note, the opposite pattern uses a capital letter. 
//This shortcut is the same as [^A-Za-z0-9_].

let quoteSample = "The boxing wizards & their friends jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex);
console.log(result);
// OUTPUT: [ ' ', ' ', ' ', '&', ' ', ' ', ' ', ' ', '.' ]