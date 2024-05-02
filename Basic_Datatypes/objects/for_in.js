//for in loop 
//Iterate Through the Keys of an Object with a for...in Statement

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(allUsers) { 
    
    let c=0;
    for ( let key in allUsers){
      
    if( allUsers[key].online == true) {c++};
    }
    return c;
  }
  
  console.log(countOnline(users));