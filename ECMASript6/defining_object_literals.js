//Write Concise Object Literal Declarations Using Object Property Shorthand

//   < EXAMPLE---1---->
const getMousePosition1 = (x, y) => ({
    x: x,
    y: y
  });//can be written as 

  const getMousePositionl = (x, y) => ({ x, y });//here : mousepointerL and 1 to remove eroor
//    </-------EXAMPLE 1>




  //Hence the code is
  const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };