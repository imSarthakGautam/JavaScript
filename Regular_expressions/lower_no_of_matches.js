//only lower no of matches example :/a{3,}/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // only 4 or more letters of h
let result = haRegex.test(haStr);
console.log(result);