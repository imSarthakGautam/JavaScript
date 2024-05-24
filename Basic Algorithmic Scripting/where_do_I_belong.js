/*   ---------------------------| Q U E S T I O N |-------------------------
Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
 The returned value should be a number.

For example:
 getIndexToIns([1,2,3,4], 1.5) 
 should return 1 because it is greater than 1 (index 0),
  but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/


function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        console.log(i);
        return i;
      }
      //arr.filter(val => num > val).length;
      // creates the array with numbers<num so it should come after length of this array 
    }
  
    console.log(arr.length,"At the end");
    return arr.length;
  }
  
  getIndexToIns([40, 60], 50);


//-----------------------------------| I M P O R T A N T  N O T E S|-----------------------
//Sorting is necessary
//Note you should not sort arrays like this 
  /*
 let arr2=arr.sort();

This uses the default comparison function, which converts elements to strings and compares their sequences of UTF-16 code units values.

The default sort will consider 10 as less than 2 because "10" comes before "2" in lexicographic order.

Similarly, ["apple", "banana", "Cherry"].sort() will sort strings in case-sensitive lexicographic order, resulting in ["Cherry", "apple", "banana"].

   */