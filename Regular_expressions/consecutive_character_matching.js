//Matching characters that come consecutively
let difficultSpelling = "Mississippi is swift";
//let myRegex = /[s+]/g; Remember not  [] 

let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);
console.log(result);