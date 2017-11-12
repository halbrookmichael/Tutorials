//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Please guess a number.");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber) {
	alert("You got it right!");
}

//check if higher
else if(guess > secretNumber) {
	alert("Too HIGH, guess again!");
}

//check if lower
else {
	alert("Too LOW, guess again!");
}