// regex chewieRegex that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters


let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
console.log(result);
