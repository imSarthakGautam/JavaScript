//A common pattern in JavaScript is to execute a function as soon as it is declared:

/*
the function has no name and is not stored in a variable. The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
This pattern is known as an immediately invoked function expression or IIFE.
*/

function makeNest() {
    console.log("A cozy nest is ready");
  }
  
  makeNest();
  
  
  //In IIFE the above function is replaced by :
  
  (function () {
    console.log("A cozy nest is ready");
  })();