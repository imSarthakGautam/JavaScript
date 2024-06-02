/*
 * Binary Agents
Return an English translated sentence of the passed binary string.
The binary string will be space separated.

 */

function binaryAgent(str) {
    let arr1=str.split(" ")
    console.log(arr1)
  
  //converting each 8 bit binary to integer
    let arr2=arr1.map(num=>parseInt(num,2))
    console.log(arr2)
  
  //converting the decimal to corresponding ASCII value
  let arr3= arr2.map(num=>String.fromCharCode(num))
  console.log(arr3)
  
  console.log(` The final string was : ${arr3.join("")}`)
    return arr3.join("");
  
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  
  /* HINT :
  
  Split the Binary String:
  -  Divide the binary string into chunks of 8 bits.
  
  Convert Binary to Decimal: 
  - parseInt(binary, radix=2)
  - For each 8-bit chunk, convert it from binary to decimal.
  
  Convert Decimal to Character: 
  - String.fromCharCode(65) = 'A'
  - Convert each decimal number to its corresponding ASCII character using String.fromCharCode
  
  
  Join the Characters:
  - Combine all characters into a single string.
  */