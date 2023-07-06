//If you want to find either Penguin or Pumpkin in a string, 
//you can use the following Regular Expression: /P(engu|umpk)in/g

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-z]\.|(A-z)(a-z)+) )?Roosevelt/; 
// Allowing middle names, CHecking for spaces in between names.
let result1 = myString.match(myRegex);
let result = myRegex.test(myString);
console.log(result); 