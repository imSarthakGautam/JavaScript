
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };

  bicycle.setGear(3);
  console.log(bicycle.gear);

  /*
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};  

as 

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
*/