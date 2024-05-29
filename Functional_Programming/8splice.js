//Remove Elements from an Array Using slice Instead of splice
/*
Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

You should not mutate the original array passed to the function
*/


function nonMutatingSplice(cities) {
    let city=[...cities]
     return city.slice(0,3);
   
   }
   
   nonMutatingSplice(["Chicago", "Delhi", "Islamabad", "London", "Berlin"]) 