let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // The shortcut to look for digit characters is \d
//This is equal to the character class [0-9],
// which looks for a single character of any number between zero and nine.
let result = movieName.match(numRegex).length;
console.log(result);