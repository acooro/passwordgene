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
var useLowerCaseLtrs = ["abcdefghijklmnopqrstuvwyxz"]
var useUpperCaseLtrs = ["ABCDEFGHIJKLMNOPQRSTUVWYXZ"]
var useNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var useSpecialChar = ["!@#$%^&*"]

// ask the user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
}

function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want to used lower case letters in the password?");
  console.log(useLowerCaseLtrs)
}

function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want to used upper case letters in the password?")
  console.log (useUpperCaseLtrs) 
}

function useSpecChar(){
  useSpecialChar = confirm("Do you want to use special characters?")
  console.log (useSpecialChar)
}
function useNum(){
  useNumber = confirm ("Do you want to use numbers?")
  console.log (useNumber)
}


function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  useSpecChar();
  useNum();



  return "finalpassword"
}