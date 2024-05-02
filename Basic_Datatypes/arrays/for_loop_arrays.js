//For loop and forEach loops in an arrays :

//to return a filtered version of the passed array such that
// any array nested within arr containing elem has been removed.

const filteredArray=(arr, elem) => {
    let newArr = [];
    for ( let i=0; i<arr.length; i++){
      if (arr[i].indexOf(elem)==-1) 
      //here arr[i]!== elem isn't applicable .....1
      // arr[i].indexOf checks if element is present inside the nested array on the particular index
      
      {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  
  
  