//print all numbers between -10 and 19
console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19");
var num = -10;

while(num < 20) {
	console.log(num);
	num ++;
}

//print all even numbers between 10 and 40
console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40");
var num = 10;

while(num < 40) {
	console.log(num);
	num +=2;
}

//print all even numbers between 10 and 40
console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 AND 333");
var num = 300;

while(num < 333) {
	if(num % 2 !== 0) {
		console.log(num);
	}
	num ++;
}

//print all even numbers between 10 and 40
console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var num = 5;

while(num < 50) {
	if(num % 5 === 0 && num % 3 === 0) {
		console.log(num);
	}
	num ++;
}