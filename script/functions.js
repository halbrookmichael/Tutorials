//Returns true if even and false if odd.

function isEven(num) {
	return num % 2 === 0;
}

//Returns number multiplied by all factorials.

function factorial(num) {
	if(num === 0) {
		return 1;
	}
	//recursion
	return num * factorial(num - 1);
}

//Returns snake_cased string from entered kebab-cased string.

function kebabToSnake(str) {
	//replace all - with _
	var newStr = str.replace(/-/g, "_");
	//return newString as snake_case
	return newStr;
}