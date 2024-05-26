//Use a Mixin to Add Common Behavior Between Unrelated Objects

/*
As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. 

Inheritance does not work well for unrelated objects.
For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.
*/

let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Create a mixin named glideMixin that defines a method named glide AND takes input parameter as object
  let glideMixin= function(obj){
    obj.glide=function(){
      return(`Hey I am ${obj.name} and I am gliding`);
    }
  }
  
  //Mixin to both bird and boat
  glideMixin(bird);
  glideMixin(boat);
  
  //the MIXIN (glideMixin) gives both bird and boat the ability to glide, DESPITE BOTH OF THEM BEING UNRELATED OBJECTS
  console.log(bird.glide());
  console.log(boat.glide())
  
  