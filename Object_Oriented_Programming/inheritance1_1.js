//-------------| REMEMBER .__proto__ IS OUTDATED METHOD

//Although, there’s a special method for this too:

//Object.create(proto[, descriptors])
 // creates an empty object with given proto as [[Prototype]] and optional property descriptors.

 let animal = {
    eats: true
  };
  
  // create a new object with animal as a prototype
  let rabbit = Object.create(animal); // same as {__proto__: animal}
  
  alert(rabbit.eats); // true
  
  alert(Object.getPrototypeOf(rabbit) === animal); // true
  
  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}