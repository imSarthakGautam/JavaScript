// Add Elements to the End of an Array Using concat Instead of push
// Functional programming is all about creating and using non-mutating functions.
// concat offers a way to merge new items to the end of an array without any mutating side effects.


function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingPush(first, second);
  
  