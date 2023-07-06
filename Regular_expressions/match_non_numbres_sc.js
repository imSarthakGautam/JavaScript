//The shortcut to look for non-digit characters is \D

let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // All except numbers
let result = movieName.match(noNumRegex);
console.log(result,result.length);