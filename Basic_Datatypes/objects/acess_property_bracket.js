//Access Property Names with Bracket Notation

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    
  return foods[scannedItem];
  //variables inside bracket notations;
  //(foods.scannedItem) isn't valid
    
  }
  
  console.log(checkInventory("apples"));