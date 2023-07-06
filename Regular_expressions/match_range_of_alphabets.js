let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

// In above 3 matches function it returns
//  cat bat and null

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
//let result1 = alphabetRegex.test(quoteSample); // True or false only 
let result = quoteSample.match(alphabetRegex);
console.log(result);