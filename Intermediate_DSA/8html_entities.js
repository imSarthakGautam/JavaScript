/*
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

for Example:
- convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

- convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos
*/

function convertHTML(str) {
    // Split by character
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  
  convertHTML("Dolce & Gabbana");