let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s0-5]/gi; //remember to put []
let result = quoteSample.match(myRegex); 
console.log(result);

let jennyStr = "Jenny8675309";
let myRegexx = /[a-z0-9]/ig;
let r=jennyStr.match(myRegexx);
console.log(r);