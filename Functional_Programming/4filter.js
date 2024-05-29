//filter calls a function on each element of an array
//returns a new array containing only the elements for which that function returns a truthy value

const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
  ];
  
  const usersUnder30 = users.filter(user => user.age < 30);
  console.log(usersUnder30); 

  //The console would display the value 
  //[ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ]