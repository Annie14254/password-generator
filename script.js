// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var specialCharacters = [ "!", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":"];
var numberofCharacters
var validCharacters = []
var includeSpecialCharacters
var includeUppercase
var includeLowercase
var includeNumbers
var item = []
var itemFinal


// ask user for criteria on password
function passwordCriteria() {
  numberofCharacters = prompt("How long do you want the password to be?\nPlease select a value between 8 and 128")
  includeSpecialCharacters = confirm("Do you want to include special characters?")
  includeUppercase = confirm("Do you want to include uppercase letters?")
  includeLowercase = confirm("Do you want to include lowercase letters?")
  includeNumbers = confirm("Do you want to include numbers?")
}

// add characters to the array that will be used in final generation
function addValidCharacters() {
  if(includeSpecialCharacters === true) {
    validCharacters = validCharacters.concat(specialCharacters);
    alert("Special characters will be included in your password.")
  } if (includeLowercase === true) {
    validCharacters = validCharacters.concat(lowercase);
    alert("Lowercase letters will be included in your password.")
  } if (includeUppercase === true) {
    validCharacters = validCharacters.concat(uppercase);
    alert("Uppercase letters will be included in your password.")
  } if (includeNumbers === true) {
    validCharacters = validCharacters.concat(numbers);
    alert("Numbers will be included in your password.")
  } else {
  }
}

// generate and return the password
var finalGenerate = function() {
  for (i = 0; i < numberofCharacters; i++){
  final = Math.floor(Math.random() * numberofCharacters);
  item.push(validCharacters[final]);
  }
  return item;
}

// include errors for no characters/incorrect length and re-loop the function
function returnError () {
  if (includeSpecialCharacters === false && includeLowercase === false && includeUppercase === false && includeNumbers == false) {
    alert("Please include at least one character type.");
    writePassword();
  } else if (numberofCharacters > 128 || numberofCharacters < 8) {
    alert("Please choose a number between 8 and 128");
    writePassword();
  } else {
  }
}

function generatePassword() {
  passwordCriteria();
  addValidCharacters();
  finalGenerate();
  returnError();
  return item.join('');
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
