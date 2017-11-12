function printReverse(array) {
	for(i = array.length - 1; i >= 0; i --) {
		console.log(array[i]);
	}
}

console.log("PRINT REVERSE");
printReverse([1,2,3,4]);

// isUniform()

function isUniform(arr) {
	var check = arr[0];
	for(i = 1; i < arr.length; i ++) {
		if(arr[i] !== check) {
			return false;
		}	
	}
	return true;
}

// sumArray()

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element){ // loops through the full array; element takes the value of each item passed in
		total += element; // adds total to each element in the array; as it iterates through total take on the next number in array
	});
	return total;
}

// max()

function max(arr) {
	var max = arr[0];
	for(i = 1; i < arr.length; i ++) {
		if(arr[i] > max){ // check if next element is greater than current max
			max = arr[i]; // if element is greater, it becomes the new max
		}
	}
	return max;
}