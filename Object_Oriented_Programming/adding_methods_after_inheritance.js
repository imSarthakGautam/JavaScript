/* Add Methods After Inheritance

A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
*/

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Dog inherits the Animal,
Dog.prototype = Object.create(Animal.prototype);
// Dog's prototype is set to it's own
Dog.prototype.constructor=Dog;

//adding a bark() method to the Dog object that is uniquely dog's and not Animal's 
 Dog.prototype.bark= function(){
   console.log("Woof!")
 }

let beagle = new Dog();
//property derived from Animal
beagle.eat()
//own property
beagle.bark()