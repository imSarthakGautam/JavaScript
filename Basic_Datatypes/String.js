//use of backticks ` along with single and double quotes.
// use of backtick allows us to insert an expression in between
let data = 100;
let back= `this is a page in middle of the book, i.e page no : ${data}
and total pages are : ${data * 2}`;

console.log(back);

//taking individula letter out of a string
result = (back[0] === back.at(0))
console.log(result);//true


// .toUpperCase() and .toLowerCase()
console.log(back.toUpperCase());    
console.log(back[3].toUpperCase());    
console.log(back.at(-1).toUpperCase());    //-1 is last -2 is 2nd last