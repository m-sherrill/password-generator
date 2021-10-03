// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// GeneratePassword function
function generatePassword() {

  // Arrays
  var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 6]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"]


  // PassLength Variable - determines the length of the generated password
  var passLength = prompt("How many characters would you like? Select between 8 and 128.")


  // Inserting a while loop to make sure the user picks a number between 8 and 128
  while (true) {
    if (!passLength) {
      alert("You must enter a valid number")
      passLength = prompt("Please select a number between 8 and 128.")
    } else if (passLength < 8 || passLength > 128) { // a stop in case they enter numbers outside the options
      passLength = prompt("Please select a number between 8 and 128.")
    } else {
      break // ending the loop if they insert a valid number choice 
    }
  }

  // Confirm Boxes
  var confirmCharacter = confirm("Would you like your password to contain special characters?")
  var confirmNumber = confirm("Would you like your password to contain numbers?")
  var confirmUpper = confirm("Would you like your password to contain uppercase letters?")
  var confirmLower = confirm("Would you like your password to contain lowercase letters?")

  // if/else statements to compare the data provided from the confirm boxes
  if (!confirmNumber && !confirmUpper && !confirmLower && !confirmCharacter) { // no options selected
    while (true) {
      if (!confirmNumber && !confirmUpper && !confirmLower && !confirmCharacter) {
        alert("Please Select at least one option")
        confirmCharacter = confirm("Would you like your password to contain special characters?")
        confirmNumber = confirm("Would you like your password to contain numbers?")
        confirmUpper = confirm("Would you like your password to contain uppercase letters?")
        confirmLower = confirm("Would you like your password to contain lowercase letters?")
      } else {
        break
      }
    }
  }
  if (confirmNumber && confirmUpper && confirmLower && confirmCharacter) { // all options selected
    confirmChoices = number.concat(upper, lower, character)
    // Three options selected
  } else if (confirmNumber && confirmUpper && confirmLower) {
    confirmChoices = number.concat(upper, lower)
  } else if (confirmCharacter && confirmUpper && confirmLower) {
    confirmChoices = character.concat(upper, lower)
  } else if (confirmNumber && confirmCharacter && confirmLower) {
    confirmChoices = number.concat(character, lower)
  } else if (confirmNumber && confirmUpper && confirmCharacter) {
    confirmChoices = number.concat(upper, character)

    // Two options selected
  } else if (confirmNumber && confirmLower) {
    confirmChoices = number.concat(lower)
  } else if (confirmNumber && confirmUpper) {
    confirmChoices = number.concat(upper)
  } else if (confirmUpper && confirmLower) {
    confirmChoices = upper.concat(lower)
  } else if (confirmNumber && confirmCharacter) {
    confirmChoices = upper.concat(character)
  } else if (confirmUpper && confirmCharacter) {
    confirmChoices = upper.concat(character)
  } else if (confirmCharacter && confirmLower) {
    confirmChoices = character.concat(lower)

    // One options selected
  } else if (confirmNumber) {
    confirmChoices = number
  } else if (confirmUpper) {
    confirmChoices = upper
  } else if (confirmLower) {
    confirmChoices = lower
  } else if (confirmCharacter) {
    confirmChoices = character
  }

  // empty array for array manipulation 
  var pw = []


  for (var i = 0; i < passLength; i++) { // sets the length of the new array
    var combinedChoices = confirmChoices[Math.floor(Math.random() * confirmChoices.length)] // sets a new variable generating randomly from the confirmChoice
    pw.push(combinedChoices) // combines the coices from the prompts together
  }


  var password = pw.join("") // removes the comma between each character in the new array
  return password // adds the final result
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



