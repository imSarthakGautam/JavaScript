/*
-- Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {

    const newArr = [];
    function pushh(arr1,arr2){
    for (let i=0; i<arr1.length; i++){
        
        if (arr2.indexOf(arr1[i])===-1){
          //pushes all unique elemnts of arr1 to newArr
          newArr.push(arr1[i])
        }
      }
    }
   pushh(arr1,arr2);
   pushh(arr2,arr1);
  
   return newArr;
  
    }
    
    // return newArr;
  
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);