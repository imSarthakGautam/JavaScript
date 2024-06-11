/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/


function palindrome(nstr){
    //console.log(str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''))
    let str = nstr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
    for (let i=0; i<str.length; i++){
      console.log(i)
      if (str[i]!==str[str.length-1-i]){
        console.log(str.length)
  
        console.log(false, str[i], str[str.length])
        return false;
      } 
    }
    return true;
  }
  
  palindrome("eye");
  
  // even length string=odd length string
  