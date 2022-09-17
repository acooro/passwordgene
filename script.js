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
var numOfCharacters = ""
var useLowerCaseLtrs = ["abcdefghijklmnopqrstuvwyxz"]
var useUpperCaseLtrs = ["ABCDEFGHIJKLMNOPQRSTUVWYXZ"]
var useNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var useSpecialChar = ["!@#$%^&*"]

function howManyCharacters() {
  numOfCharacters = parseInt( prompt("How many characters?"));

  while(numOfCharacters <=7 || numOfCharacters >= 190){
    alert("Password can only be between 7-190")
    numOfCharacters = parseInt( prompt("How many characters?"));
  }

useLowerCaseLtrs = confirm("Do you want to used lower case letters in the password?");

useUpperCaseLtrs = confirm("Do you want to used upper case letters in the password?")

useSpecialChar = confirm("Do you want to use special characters?")

useNumber = confirm ("Do you want to use numbers?")

while(useLowerCaseLtrs === false && useUpperCaseLtrs === false && useSpecialChar === false && useNumber === false) {
  alert ("You have to pick at least one");
  useLowerCaseLtrs = confirm("Do you want to used lower case letters in the password?");
  useUpperCaseLtrs = confirm("Do you want to used upper case letters in the password?");
  useSpecialChar = confirm("Do you want to use special characters?");
  useNumber = confirm ("Do you want to use numbers?")
  }
}


function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  useSpecChar();
  useNum();



  return "password"
}