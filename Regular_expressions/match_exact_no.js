//exact number of times /a{no}/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // to match the word Timber only when it has four letter m's
let result = timRegex.test(timStr);
console.log(result);