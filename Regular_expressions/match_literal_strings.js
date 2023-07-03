let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Searches fro Waldo
let result = waldoRegex.test(waldoIsHiding);

// variable = string_part.test(string_whole);