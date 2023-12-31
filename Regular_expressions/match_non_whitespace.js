/*
Search for non-whitespace using \S

This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. 
You can think of it being similar to the character class
 [^ \r\t\f\n\v].
*/


let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
console.log(result,result.length);
// returns all 38 non-whitespace characters