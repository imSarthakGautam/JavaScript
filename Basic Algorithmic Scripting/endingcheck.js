//check if a string (first argument, str) ends with the given target string (second argument, target).



//Method 1 : DSA , no use of  string functions 

function confirmEnding(str, target) {
    // console.log(str.endsWith(target));
  
  let a = str.length-target.length;
  console.log(a);
  
    // for ( let i= str.length-1; i>=0 ;i--){
    for (let j = target.length -1; j>=0; j--){
    
    console.log(` ${str[j+a]}  ${target[j]}`);
  
     if (str[j+a]!== target[j]){
       return false;
     }
    
    }
    return true;
  }
  
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  
//------------------------------|| method 2 ||---------------------//

  

  function confirmEnding(str, target) {
   
    return str.slice(str.length - target.length) === target;
    
    //return str.slice(-target.length) === target
    //If a negative number is provided as the first parameter to slice(), 
    //the offset is taken backwards from the end of the string.
}
  
  
  confirmEnding("He has to give me a new name", "name");