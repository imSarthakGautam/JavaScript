//Use of Closure to Protect Properties Within an Object from Being Modified Externally.

//In JavaScript, a function always has access to the context in which it was created. 
//This is called closure.


/*
The simplest way to make this public property private is by creating a variable within the constructor function.
 This changes the scope of that variable to be within the constructor function versus available globally.
  This way, the variable can only be accessed and changed by methods also within the constructor function.*/


  function Bird() {
    let weight = 15;
  
    this.getWeight=function(){
      return weight;
    }
  
  }
  
  let ducky = new Bird();
  let wei=ducky.getWeight();
  console.log(wei);