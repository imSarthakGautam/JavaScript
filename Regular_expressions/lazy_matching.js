let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // To print h1
let result = text.match(myRegex);
console.log(result);

let textt = "<h1>Winter is coming,Winner Wins.</h1>";
let myRegexx = /W[a-z]*e/g; 
let resultt = textt.match(myRegexx);
console.log(resultt);

// Prints [ 'Win', 'Winn', 'Win' ]
/* for myRegexx= /w[a-z]*e/g: [ 'Winte', 'Winne' ]


let textt = "<h1>Winter is coming, We know Winner Wins.</h1>";
let myRegexx = /W[a-z]?e/; prints We
*/