// doesnt return match : true or false but what is matched


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // coding is regex
let result = extractStr.match(codingRegex); 

// TEST V/s MATCH :
// RETURNS TRUE OR FALSE ,  RETURNS MATCHED VALUE
// string_full.match(string_part)
// string_part.match(string_full)