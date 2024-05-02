/*

!!!splice() can take up to three parameters?
 Well, you can use the third parameter, comprised of one or more element(s), to add to the array. 

*/

function htmlColorNames(arr) {
  
    arr.splice(0,2,'DarkSalmon','BlanchedAlmond');
    
      // the function is modified using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
      
      return arr;
    }
    
    console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));