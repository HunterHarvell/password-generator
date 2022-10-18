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
  const passwordInfo = [];
  const passChar = [];

  // Password Integers
  const characterAmount = window.prompt("Enter the amount of characters you want for your password. NOTE: Must be between 8-128 characters");
  if (characterAmount >= 8 && characterAmount <=128) {
    var getNumeral = window.confirm("Would you like to include numbers in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getNumeral) {
      // adss numeral array to passwordInfo
      for (i = numerals.length - 1; i > 0; i--) {
        passwordInfo.push(numerals[i]);
      };
      // adds a numeral to ensure at least one is chosen
      passChar.push(numerals[Math.floor(Math.random()*numerals.length)]);
    };

    // Would you like special characters?
    var getSC = window.confirm("Would you like to use special characters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getSC) {
      // adds specialChar array to passwordInfo
      for (i = specialChar.length - 1; i > 0; i--) {
        passwordInfo.push(specialChar[i]);
      };
      // adds random special character to ensure at least one is chosen
      passChar.push(specialChar[Math.floor(Math.random()*specialChar.length)]);
    };

    // Would you like lower case?
    var getLC = window.confirm("Would you like to use lower case letters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getLC) {
      // adds letterLower array to passwordInfo
      for (i = letterLower.length - 1; i > 0; i--) {
        passwordInfo.push(letterLower[i]);
      };
      // adds random lowercase to ensure at least one is chosen
      passChar.push(letterLower[Math.floor(Math.random()*letterLower.length)]);
    };

    // Would you like upper case?
    var getUC = window.confirm("Would you like to use upper case letters in your password? (OK for 'YES' & CANCEL for 'NO')");
    if (getUC) {
      // adds letterUpper array to passwordInfo
      for (i = letterUpper.length - 1; i > 0; i--) {
        passwordInfo.push(letterUpper[i]);
      };
      // adds random Uppercase to ensure at least one is chosen
      passChar.push(letterUpper[Math.floor(Math.random()*letterUpper.length)]);
    };

    // notify user needs to select at least one option
    if (!passwordInfo) {
      window.alert("You need to select at least one option, please try again!");
    };

    // adds the remaining characters needed to fulfill length requirement
    for (let i = passChar.length; i < characterAmount; i++) {
      passChar.push(passwordInfo[Math.floor(Math.random()*passwordInfo.length)]);
    };

    // // shuffle characters using Fisher-Yates algorithm
    // // https://stackoverflow.com/a/2450976/8376184
    for(let i = passChar.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      const temp = passChar[i];
      passChar[i] = passChar[swapIndex];
      passChar[swapIndex] = temp;
    };
  } else {
    // if user selected password length outside of spec
    window.alert("You need to select a valid length for you password!");
  };

// displays the password to the user
  var password = passChar.join('');
  var passwordText = document.querySelector("#password");  
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
