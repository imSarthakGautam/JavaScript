//Unlike slice, splice doesnt work in copy of an array
// the splice method mutates the original array it is called on

/*
splice method for this, which takes arguments for the index of where to start removing items,
 then the number of items to remove.
 
  If the second argument is not provided, the default is to remove items through the end. However, 
*/
const cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
const change=cities.splice(3, 1);

console.log(changes)
//returns [ 'London' ]

console.log(cities)
//returns [ 'Chicago', 'Delhi', 'Islamabad', 'Berlin' ]