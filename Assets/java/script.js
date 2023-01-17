// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Array variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "01234567890";
var specialCharacters = "!'#$%&()*+-./:;<=>?@[]^_`{|},~";

// Main function

function generatePassword() {
  var password = "";
  var newPassword = "";


  // password length prompt with error code prompt

  var passwordLength = window.prompt("Choose a password length between 8-128 characters.");
  while ((passwordLength < 8) || (passwordLength > 128)) {
    window.alert("Invalid password length selected. Please try again.");
    passwordLength = window.prompt("Choose a password length between 8-128 characters.");
  }

  // password criteria prompts

  function passwordCriteria() {

    var includeUpperCase = window.confirm("Include uppercase letters?");
    if (includeUpperCase) {
      newPassword += upperCase;
    }
    
    var includeLowerCase = window.confirm("Include lowercase letters?");
    if (includeLowerCase) {
      newPassword += lowerCase;
    }

    var includeNumbers = window.confirm("Include numbers?");
    if (includeNumbers) {
      newPassword += numberCharacters;
    }
  
    var includeSymbols = window.confirm("Include special characters?");
    if (includeSymbols) {
      newPassword += specialCharacters;
    }

    // Error prompt (while returns to a boolean value)

    while ((!includeLowerCase) && (!includeUpperCase) && (!includeNumbers) && (!includeSymbols)) {
      window.alert("You must select at least 1 character type.");
      passwordCriteria();
    }
  }
  passwordCriteria();

  // Random generator via https://www.geeksforgeeks.org/java-math-random-method-examples/

  for (var i = 0; i < passwordLength; i++) {
    password += newPassword.charAt(Math.floor(Math.random() * newPassword.length));
  }

  return password;
}
