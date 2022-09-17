# passwordgene

3rd project

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Password Generator</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div class="card">
        <div class="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div class="card-body">
          <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div class="card-footer">
          <button id="generate" class="btn">Generate Password</button>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

javascript:

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


var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
var lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// var stringNumber = Array.from(numbers);
// var stringSpecialChar = Array.from(specialChar);
// var stringLowerLetter = Array.from(lowerLetter);
// var stringUpperLetter = Array.from(upperLetter);

// Global variables
var numOfCharacters = ""
var useLowerCaseLtrs;
var useUpperCaseLtrs;
var useNumber;
var useSpecialChar;

function generatePassword() {
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

var passwordCharacters = []

if (useLowerCaseLtrs){
  passwordCharacters = passwordCharacters.concat(numbers)
}
if (useUpperCaseLtrs){
  passwordCharacters = passwordCharacters.concat(upperLetter)
}
if (useSpecialChar){
  passwordCharacters = passwordCharacters.concat(specialChar)
}
if (useNumber){
  passwordCharacters = passwordCharacters.concat(lowerLetter)
}

console.log (passwordCharacters)

var randomPassword = ""

for (var i = 0; i <numOfCharacters; i++){
  randomPassword = randomPassword + passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)]
  console.log (randomPassword)
}
return randomPassword;
}


// function generatePassword() {
//   console.log("start here");
//   howManyCharacters();
//   useLowerCase();
//   useUpperCase();
//   useSpecChar();
//   useNum();

//   return "password"
// }

