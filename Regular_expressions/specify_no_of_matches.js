/*
You can specify the lower and upper number of patterns with quantity specifiers. 
Quantity specifiers are used with curly brackets ({ and }). 
You put two numbers between the curly brackets - for the lower and upper number of patterns.
*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);//true
multipleA.test(A2);//false



let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; 
// to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let result = ohRegex.test(ohStr);