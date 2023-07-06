// ^: This is a caret, Now in this case it is used to match the first word/pattern at begining of the string, 

let rickyAndCal = "Cal and Ricky both like racing.";
let rickyyAndCal = " Ricky and Cal both like racing and Cal is happy";
let calRegex = /^Cal/; // Change this line
let calRegex1 = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
let result1 = calRegex1.test(rickyyAndCal);
console.log(result); //TRUE
console.log(result1); // FALSE