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



// Global variables
var numOfCharacters;
var useLowerCaseLtrs;

// ask the user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
}

function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs)
}


function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();



  return "finalpassword"
}