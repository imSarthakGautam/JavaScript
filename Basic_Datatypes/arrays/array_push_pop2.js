function popShift(arr) {
    let popped= arr.pop();
    console.log(popped);//prints popped element complete
    let shifted=arr.shift();
    console.log(shifted);//prints the pooped element from first
    // i.e. "challange"
    return [shifted, popped];// returned in form of an array.
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));