var age = Number(prompt("Please enter your age."));

if(age < 0) {
	console.log("You haven't been born yet!");
}
if(age === 21) {
	console.log("Happy 21st Birthday!");
}
if(age % 2 !== 0) {
	console.log("Your age is odd.");
}

// Not correct
if("Math.sqrt(age) % 1 === 0") {
	console.log("perfect square!");
}