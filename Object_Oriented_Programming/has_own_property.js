function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  
  for ( let property in canary){
    if(canary.hasOwnProperty(property)){
        //used to check the property or key of object
      ownProps.push(property);
    }
  }
  
  console.log(ownProps)

  /*
  Own properties are defined directly on the object's instance itself.
   And prototype properties are defined on the prototype.
  */