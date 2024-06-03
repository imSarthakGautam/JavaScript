//flatten the nested array without using .flat
//for example:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
function steamrollArray(arr) {
  
    //may use array.flat()
    // return(arr.flat(Infinity));
  
    const flat = [].concat(...arr);
    console.log(flat)//visualize the recursively flattening
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  
  
  steamrollArray([1, [2], [3, [[4]]]]);