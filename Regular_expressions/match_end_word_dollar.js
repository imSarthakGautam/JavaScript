//There is a way to search for patterns at the end of strings.

//You can search the end of strings using the dollar sign character $ at the end of the regex.

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);