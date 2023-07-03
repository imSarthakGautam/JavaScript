
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Using OR for multiple choices
let result = petRegex.test(petString);