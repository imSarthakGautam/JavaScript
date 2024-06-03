function convertToRoman(numb) {
    let num = numb;
    let rom = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  
    // Initialize an empty string to store the Roman numerals
    let romanNumeral = '';
  
    // Define a helper function to convert each digit to Roman numeral
    function convertDigitToRoman(digit, one, five, ten) {
      if (digit === 9) {
        return one + ten;
      } else if (digit >= 5) {
        return five + one.repeat(digit - 5);
      } else if (digit === 4) {
        return one + five;
      } else {
        return one.repeat(digit);
      }
    }
  
    // Convert each digit of the number to Roman numeral
    let digits = num.toString().split('').map(Number);
    let placeValues = ['I', 'X', 'C', 'M']; // Ones, Tens, Hundreds, Thousands
  
    for (let i = digits.length - 1, j = 0; i >= 0; i--, j++) {
      romanNumeral = convertDigitToRoman(digits[i], placeValues[j], rom[j * 2 + 1], placeValues[j + 1]) + romanNumeral;
    }
  
    return romanNumeral;
  }
  
  // Test cases
  console.log(convertToRoman(3421)); // Output: "MMMCDXXI"
  