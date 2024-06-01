function add(x) {
    //1 parameter function
    return function(y) {
      return function(z) {
        console.log(x+y+z)
        return x + y + z;
      };
    };
   
  }
  
  add(10)(20)(30);
  //3 parameters