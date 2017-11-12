console.log("PRINT ALL NUMBERS BETWEEN -10 AND 19");

for(i = -10; i < 20; i ++) {
	console.log(i);
}

console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 AND 40");

for (i = 10; i < 40; i += 2) {
	console.log(i);
}

console.log("PRINT ALL ODD NUMBERS BETWEEN 300 AND 333");

for(i = 300; i < 333; i ++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");

for(i = 1; i < 50; i ++) {
	if(i % 3 === 0 && i % 5 === 0) {
		console.log(i);
	}
}