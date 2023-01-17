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


// array variables
var lowerCase ="abdefghifjlkmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()-_=+[]{};:'<>/?\|`~.";

// main functions
function generatePassword() {
  var password = "";
  var newPassword = "";

// password length prompts with error prompt
var passwordLength = window.prompt("How many characters do you want for your password?(Choose an integer between 8-128");
  while ((passwordLength < 8) || (passwordLegth > 128)) {
    window.alert("Please try again. Select a value between 8-128");
    passwordLength = window.prompt("How many characters do you want for your password?(Choose an integer between 8-128");
  }

// password criteria functions
function passwordCriteria() {
  includeUpperCase = window.confirm ("Include uppercase letters?\nType \"YES\" or \"NO\"");
  if (includeUpperCase) {
    
  }
}
}