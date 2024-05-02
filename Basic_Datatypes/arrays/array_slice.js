/*   !!! SLICE NOT SPLICE 

slice() extracts a given number of elements to a new array, 

leaving the array it is called upon untouched. 

*/

function forecast(arr) {
    let ar2=arr.slice(2,4);
    //extraction begins at index 2 and stops at 3(4-1)
   
     return ar2; //[warm, sunny]
   }
   
   // Only change code above this line
   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));