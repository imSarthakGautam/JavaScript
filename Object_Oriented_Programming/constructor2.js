//Recieving arguments to Constructors

function Dog(name,color) {
    this.name =name,
    this.color = color,
    this.numLegs = 4
  
  }
  
  let terrier= new Dog();
  // Anytime a constructor function creates a new object, 
  // that object is said to be an instance of its constructor.


  terrier.name="terrierA"
  terrier.color="brown";

  // Instanceof operator to verify it

  console.log(terrier instanceof Dog);
  //returns true

  console.log(terrier.consturctor===Dog)
  //returns true