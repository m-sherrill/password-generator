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
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 6]
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"]


  // PassLength Variable, parseInt, turns the answer into a number and passLength variable will be the user input
  var passLength = prompt("How many characters would you like in your password? Choice must be no less than 8 and no more than 128.")
    
  // Inserting a while loop to make sure the user picks a number between 8 and 128
    while(true){ 
      if(!passLength) {
          alert("Please enter a value")
          passLength = parseInt(prompt("Please select a number between 8 and 128"))
      } else if (passLength < 8 || passLength > 128) { // a stop in case they enter numbers outside the options
          passLength = parseInt(prompt("Please select a number between 8 and 128"))
      } else {
         break // ending the loop if they insert a valid number choice 
      }
  }

  console.log(passLength)

  // Confirm Boxes
  var confirmNumber = confirm("Would you like your password to contain numbers?")
  var confirmUpper = confirm("Would you like your password to contain Uppercase letters?")
  var confirmLower = confirm("Would you like your password to contain Lowercase letters?")
        
  // if/else statements to compare the data provided from the confirm boxes
    if (!confirmNumber && !confirmUpper && !confirmLower) { // no options selected
      while(true){
        if(!confirmNumber && !confirmUpper && !confirmLower) {
          alert("Please Select at least one option")
          var confirmNumber = confirm("Would you like your password to contain numbers?")
          var confirmUpper = confirm("Would you like your password to contain Uppercase letters?")
          var confirmLower = confirm("Would you like your password to contain Lowercase letters?")        
        } else {
          break
        }
      }
    } else if (confirmNumber && confirmUpper && confirmLower) { // all options selected
      confirmChoices = number.concat(upper, lower)
    } else if (confirmNumber && confirmLower) { // only numbers and lowercase selected
      confirmChoices = number.concat(lower)
    } else if (confirmNumber && confirmUpper) { // only number and uppercase select
      confirmChoices = number.concat(upper)
    } else if (confirmUpper && confirmLower) { // only uppercase and lowercase selected
      confirmChoices = upper.concat(lower)
    } else if (confirmNumber) { // only numbers selected
      confirmChoices = number
    } else if (confirmUpper) { // only uppercase selected
      confirmChoices = upper
    } else if (confirmLower) { // only lower case selected
      confirmChoices = lower
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
