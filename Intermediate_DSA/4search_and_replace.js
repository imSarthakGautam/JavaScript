/**Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).


For Example:
myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
 */


function myReplace(str, before, after) {

    let index=str.indexOf(before)
    if (str[index]===str[index].toUpperCase()){
      //The first word is in Uppercase
      after= after.charAt(0).toUpperCase()+after.slice(1)
      console.log(after)
    }
    else{
      //The first word to replace is lowerCase
       after= after.charAt(0).toLowerCase()+after.slice(1)
      console.log(after)
    }
  
  console.log(str.replace(before,after))
  return str.replace(before,after)
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return the string He is Sitting on the couch.
  
  //additional note:
  // .replace() is only used for string and not arrays
  