/*
Functional programming is a style of programming where solutions are simple, isolated functions,
 without any side effects outside of the function scope:
  INPUT -> PROCESS -> OUTPUT

  Functional programming is about:

1.Isolated functions 
- there is no dependence on the state of the program, which includes global variables that are subject to change

2.Pure functions 
- the same input always gives the same output

3.Functions with limited side effects 
- any changes, or mutations, to the state of the program outside the function are carefully controlled.
*/


// Function that returns a cup of green tea
const prepareTea = () => 'greenTea';

/*
returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    //calls function prepareTea() for each cup
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Calling the function
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC)
