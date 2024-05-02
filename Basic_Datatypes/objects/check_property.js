//Check if an Object has a Property

//   objectname__.hasOwnProperty(   "property_name"   ) 
//or   "property_name" in objectname__

// returns true or false

let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
     return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
      userObj.hasOwnProperty(name)
  
      /* 
      return userObj.hasOwnProperty("Alan") &&
      userObj.hasOwnProperty("Jeff") &&
      userObj.hasOwnProperty("Sarah") &&
      userObj.hasOwnProperty("Ryan"); 
      */
    );
  
  
  }
  
  console.log(isEveryoneHere(users));