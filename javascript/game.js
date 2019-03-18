
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var guessesLeft = document.getElementById('guessesLeft');
var alreadyUsed = document.getElementById('alreadyUsed');

var letters = "abcdefghijklmnopqrstuvwxyz"

// not displaying

//
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alreadyUsedArr = []; 

//shows the answer in the console

//generate random letter for user to guess
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function userInput(event) {
//takes in user input
var userGuess = event.key;

//not working
/*if (userGuess != letters) {
alert('only letters of the alphabet pls')
}
*/

/* this isn't working correctly and so the for loop is testing a different route
if (event == randomLetter) {
//if user guesses right then add to the wins 
wins++;
}
if (guessesLeft == 0) {
losses++;
}
if (event != randomLetter) {
//if the user guesses wrong then take away from the guesses left
guessesLeft--;
}

if (guessesLeft == 0) {
losses++;
}
*/
if (userGuess !== randomLetter && guessesLeft > 0) {
    //if the user guesses wrong then take away from the guesses left
    guessesLeft = guessesLeft - 1;

if (guessesLeft == 0) {
losses++;
console.log(losses)
} else if (userGuess == randomLetter) {
//if user guesses right then add to the wins 
wins++; 
console.log(wins)
} else if (userGuess !== randomLetter) {
//if the user guesses wrong then take away from the guesses left
guessesLeft--;
    }

}

if (userGuess == alreadyUsedArr) {
    alert('pick a letter you havent used yet');
} 

// alerts for every key press rather than ever non letter
// if (userGuess !== letters) {
    alert('that\'s not a letter silly');
}
alreadyUsedArr.push(userGuess)
// alreadyUsedArr.push(userGuess);
$("#guessesLeft").text('Guesses Left: ' + guessesLeft);
/* *******is displaying two letters for some reason******* */
$('#alreadyUsed').text("Letters Used: " + alreadyUsedArr);
$('#losses').text('Losses: ' + losses);
$('#wins').text("Wins: " + wins)

console.log(alreadyUsedArr);


};


console.log(randomLetter);
