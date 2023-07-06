let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // matches  all 3 letters words ending with fun sun pun nun,etc
let result = unRegex.test(exampleStr);
console.log(result);