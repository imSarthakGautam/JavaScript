/*
herefore art thou---

Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example,

 if the first argument is : 
 [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
 
 and the second argument is :
  { last: "Capulet" }, 
  
  then you must return the third object from the array (the first argument),
  i.e [{ first: "Tybalt", last: "Capulet" }]
   because it contains the name and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {

    let newArr=[]
    for (let i=0;i<collection.length;i++){
    
      for (let j in source){
        if ( collection[i][j]==source[j]){
          //match found should return obj in collection contating that match.
    newArr.push(collection[i])
        console.log(newArr)
        return newArr;
    
        //this solution only returns for one match case
    
    
        }
      }
     }
    }
    
    
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
    
     //Rough notes :
        
      // console.log(collection[i]['first']) // obj[key] form
      // console.log(`Object ${i+1} in collections are`,collection[i])
    
       //  console.log('keys :',j) //gives keys
      //  console.log('values :',source[j]) //gives values