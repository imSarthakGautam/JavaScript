let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
//umtil there is no match
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

/* 
here, indexOf( , ) only gives 1st find so, whenever we need to find multiple finds we iterate
over the String.
-returns the position

Here string iterates until no target is remaining i.e indexOf=-1

so, until result is -1 we iterate by increasing position by +1 
*/

alert(str.includes("fox")); //true
alert(str.includes("fox",15 )); //false : checks from 15th position

/* similarly there are

.startsWith("string");
.endsWith("string");

*/



