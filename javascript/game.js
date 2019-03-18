
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

for (var i = 0; i < guessesLeft; i++) {
if (guessesLeft == 0) {
losses++;
} else  if (userGuess !== randomLetter) {
//if the user guesses wrong then take away from the guesses left
guessesLeft--;
} else if (userGuess == randomLetter) {
//if user guesses right then add to the wins 
wins++;
} else if (userGuess !== randomLetter) {
//if the user guesses wrong then take away from the guesses left
guessesLeft--;
    }
}
alreadyUsedArr.push(userGuess);
$("#guessesLeft").text('Guesses Left: ' + guessesLeft);
/* *******is displaying two letters for some reason******* */
$('alreadyUsed').text("Letters Used: " + alreadyUsedArr);
$('losses').text('Losses: ' + losses);
$('wins').text("Wins: " + wins)


};


console.log(randomLetter);
console.log(alreadyUsedArr);