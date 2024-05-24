function Dog(name) {
    this.name = name;
  }
  Dog.prototype = {
    constructor:Dog,
    //This is imp..<1>

    numLegs: 2,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  let tommy=new Dog('tommy')
  console.log(tommy.describe())


  console.log(tommy.constructor===Dog)
  //this will be false if constructor : Dog is not used
  // this is because we have overwritten the property
