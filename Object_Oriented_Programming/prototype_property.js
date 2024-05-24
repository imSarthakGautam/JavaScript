// Use Prototype Properties to Reduce Duplicate Code

/*
There may be many duplicates in all instances of an COnstructor or object
A better way is to use the prototype of Constructor. 
Properties in the prototype are shared among ALL instances of 
that constuctor 
*/

function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs=4;
  // fixing value of numLegs for all instances of Dog's object
  let beagle = new Dog("Snoopy");


