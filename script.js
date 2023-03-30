// Assignment Code
var generateBtn = document.querySelector("#generate");
//var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//var numbers
//var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
//var numberofCharacters

var characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijkmnopqrstuvwxyz',
  numbers: '0123456789',
  specialCharacters: '!@#$%^&*()'
}

// Write password to the #password input
function writePassword() {

  numberofCharacters = prompt("How long do you want the password to be?\nPlease select a value between 8 and 128")
  var includeSpecialCharacters = confirm("Do you want to include special characters?")
  var includeUppercase = confirm("Do you want to include uppercase letters?")
  var includeLowercase = confirm("Do you want to include lowercase letters?")
  var includeNumbers = confirm("Do you want to include numbers?")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
