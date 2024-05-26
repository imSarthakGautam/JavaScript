//When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.
// In programming, this is called “prototypal inheritance”. 

let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
      }
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal |oR| sets animal to be the prototype of rabbit




  //Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.
  // we can find both properties in rabbit now:

  alert( rabbit.eats ); // true 
  alert( rabbit.jumps ); // true
  rabbit.walk()

  //Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".