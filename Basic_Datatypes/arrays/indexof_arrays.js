//  indexOf(), that allows us to quickly and easily check for the presence of an element on an array. 
 

function quickCheck(arr, elem) {
  
    return arr.indexOf(elem) == -1 ? false :true ;
    //indexOf() takes an element as a parameter,
    // and when called, it returns the position, or index, of that element 
    
    // or -1 if the element does not exist on the array.
      
    }
    
    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));