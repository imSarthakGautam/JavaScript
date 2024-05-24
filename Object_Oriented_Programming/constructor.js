/*
Constructors are functions that create new objects.
They define properties and behaviors that will belong to the new object.
Think of them as a blueprint for the creation of new objects.
*/




// Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.

function Dog(){


  //- Constructors use the keyword this to set properties of the object they will create. Inside the constructor,
 //this refers to the new object it will create.
  this.name ="Tommy",
  this.color = "Grey",
  this.numLegs = 4

}


 /*- Constructors define properties and behaviors instead of returning a value as other functions might.

  let Dog={
    name:,
    color:,
    numLegs
 }

 */