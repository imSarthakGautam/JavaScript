function removeFirstTwo(list) {
    // Only change code below this line
  
    //const [a,b,...shorterList] = list;  or
    const [ , ,...shorterList] = list; 
    return shorterList;

    //shorterlist is another array inside our array.
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);