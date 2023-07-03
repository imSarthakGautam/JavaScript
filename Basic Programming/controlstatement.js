
var age = prompt("Age");
const drivingLicenseAge = 18;

const isAgeBetween13And19 = age >= 13 && age <= 19;
const isEligibleForDrivingLicense = age >= drivingLicenseAge;

console.log("Age between 13 and 19:", isAgeBetween13And19);
console.log("Eligible for driving license:", isEligibleForDrivingLicense);


console.log("METHOD 2");
 // Asking for age input from the user
var age = prompt("Enter your age:");

// Checking if age is between 10 and 20 (inclusive) and if eligible for driving license
if (age >= 13 && age <= 19) {
  console.log("Age is between 13 and 19 i.e He/She is a teenager12");

  if (age >= 18) {
    console.log("You are eligible to obtain a driving license.");
  } else {
    console.log("You are not eligible to obtain a driving license yet.");
  }
} else {
  console.log("Age is not between 10 and 20.");
}
