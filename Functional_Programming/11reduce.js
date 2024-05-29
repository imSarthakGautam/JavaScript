/*

reduce(), is the most general of all array operations in JavaScript.

The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

The callback function accepts four arguments. 

-The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration,
-the second is the current element being processed, 
-the third is the index of that element and
-the fourth is the array upon which reduce is called.

In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator.
If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

 */

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
  console.log(sumOfAges);
  //64

  //object can be returned containing the names of the users as properties with their ages as values.
  const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
  }, {});
  console.log(usersObj);

  //The console would display the value
  // { John: 34, Amy: 20, camperCat: 10 }.