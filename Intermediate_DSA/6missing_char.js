//find missing letter in he passed letter range and return it.
//for example fearNotLetter("abce") should return the string d.

function fearNotLetter(str) {
    for (let i=0; i<str.length; i++){
      let charc= str.charCodeAt(i)
       console.log(charc)
  
       if(charc!==str.charCodeAt(0) +i){
         console.log(String.fromCharCode(charc-1))
         return String.fromCharCode(charc-1)
       }
  
    }
    return undefined;
  }
  
  fearNotLetter("abce");
  //how to do ?
  //check the next letter in ASCII ? if not is it ASCII +2 ?
  