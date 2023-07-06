let longHand = /[A-Za-z0-9_]+/;//+for consecutive
let shortHand = /\w+/;

//The closest character class in JavaScript to match the alphabet is \w. 
//This shortcut is equal to [A-Za-z0-9_].
// This character class matches upper and lowercase letters plus numbers.
// Note, this character class also includes the underscore character (_).
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//ALL RESULTS ARE TRUE


let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result);//gives 31

let alphabetRegexV3 = /\w+/g;
let resultt = quoteSample.match(alphabetRegexV3).length;
console.log(resultt);//gives 6