function Animal() { }
//Animal is a supertype/parent
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//making instance of supertype
let duck=Object.create(Animal.prototype); 
let beagle=Object.create(Animal.prototype); 



duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"