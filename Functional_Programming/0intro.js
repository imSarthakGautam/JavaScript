
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
