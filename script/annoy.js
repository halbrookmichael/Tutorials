// var answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert("Yay, we made it!");

//version 2
var answer = prompt("Are we there yet?");

//-1 means that word yes doesn't exist in the answer
while(answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay, we made it!");