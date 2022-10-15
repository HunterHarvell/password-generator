// Assignment code here
const letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", ";", ":", "?", "/", "<", ">"];





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Sets variables and array to hold password information
  var passwordInfo = "";
  const passChar = [];

  // Password Integers
  var characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters");
  if (characterAmount >= 8 && characterAmount <=128) {
    var getNumeral = window.confirm("Would you like to include numbers in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getNumeral) {
      passwordInfo += numerals;
      passChar.push(Math.floor(Math.random()*numerals.length));
    };

    // Would you like special characters?
    var getSC = window.confirm("Would you like to use special characters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getSC) {
      passwordInfo += specialChar;
      passChar.push(Math.floor(Math.random()*specialChar.length));
    };

    // Would you like lower case?
    var getLC = window.confirm("Would you like to use lower case letters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getLC) {
      passwordInfo += letterLower;
      passChar.push(Math.floor(Math.random()*letterLower.length));
    };

    // Would you like upper case?
    var getUC = window.confirm("Would you like to use upper case letters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getUC) {
      passwordInfo += letterUpper;
      passChar.push(Math.floor(Math.random()*letterUpper.length));
    };

    // notify user needs to select at least one option
    if (!passwordInfo) {
      window.alert("You need to select at least one option, please try again!");
    };
  };

  var password = "";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
