/**Seek and Destroy
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

for egxample:
destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
 */

function destroyer(arr,...num) {
 //const valuessToRemove = Object.values(arguments).slice(1); this can also be applied
    return arr.filter(val=> !num.includes(val));
  
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  
  //variadic function(...param)