//You can specify the possible existence of an element with a question mark, ?.
// This checks for zero or one of the preceding element.

//You can think of this symbol as saying the previous element is optional.

let favWord = "favorite";
let favRegex = /favou?rite/; // favourite and favorite both valid 
let result = favRegex.test(favWord);
console.log(result);