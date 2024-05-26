//Notice in the example below that the describe method is shared by Bird and Dog:

Bird.prototype = {
    constructor: Bird,
    // describe: function() {
    //   console.log("My name is " + this.name);
    // }
  };
  
  Dog.prototype = {
    constructor: Dog,
    // describe: function() {
    //   console.log("My name is " + this.name);
    // }
  };


  //The describe method is repeated in two places.
  // The code can be edited to follow the DRY principle by creating a supertype (or parent) called Animal:

  function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};

//Now the describe method can be removed from Bird and Dog