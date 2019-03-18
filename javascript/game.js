
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');
var guessesLeft = document.getElementById('guessesLeft');
var alreadyUsed = document.getElementById('alreadyUsed');


var letters = "abcdefghijklmnopqrstuvwxyz"


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alreadyUsedArr = []; 

//generate random letter for user to guess
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function userInput(event) {
//takes in user input
var userGuess = event.key;


if (userGuess !== randomLetter && guessesLeft > 0) {
    //if the user guesses wrong then take away from the guesses left
    guessesLeft--;
}
//got the game to reset the count of guesses but does't fully reset with a new letter/letters used
if (guessesLeft == 0) {
losses++;
guessesLeft = 10;

} else if (userGuess == randomLetter) {
//if user guesses right then add to the wins 
wins++; 
guessesLeft = 10;
    }       
    //isn't flagging the letters at all
    if (userGuess == alreadyUsedArr.length) {
        alert('pick a letter you havent used yet');
    } 






alreadyUsedArr.push(userGuess)

$("#guessesLeft").text('Guesses Left: ' + guessesLeft );
/* ******* not stopping duplicate letters from showing ******* */
$('#alreadyUsed').text("Letters Used: " + alreadyUsedArr);
$('#losses').text('Losses: ' + losses);
$('#wins').text("Wins: " + wins)

console.log(alreadyUsedArr);


};

//shows the answer in the console
console.log(randomLetter);
