/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

forexample:
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) 
- should return [1, 3, 2, 5, 4].
*/

function uniteUnique(...arr){
    let combinedArray = [].concat(...arr);
    console.log(combinedArray)
    let newArr=[]
    combinedArray.map((elm)=>{
    if (!newArr.includes(elm)){
      newArr.push(elm)
    }
    })
    console.log(newArr)
  return newArr
    
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  //Trick:you are not getting a single array as input rather 3 arrays