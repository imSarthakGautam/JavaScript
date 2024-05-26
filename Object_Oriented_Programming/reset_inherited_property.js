// Reset an Inherited Constructor Property
// When an object inherits its prototype from another object, it also inherits the supertype's constructor property.
// So the object should show they were constructed by the object that is not supertype.

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line


let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor)
// output here: [Function: Animal]

Bird.prototype.constructor= Bird;
Dog.prototype.constructor= Dog;

console.log(duck.constructor)
//output here: [Function: Bird]