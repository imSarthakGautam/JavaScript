let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; //represents all the empty characters at begining and end
let result = hello.replace( wsRegex,"" ); // Change this line