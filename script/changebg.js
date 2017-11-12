var button = document.querySelector("button");

// button.addEventListener("click", function(){
// 	if(isRed){
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "red";
// 	}
// 	isRed = !isRed;
// });

button.addEventListener("click", function(){
		document.body.classList.toggle("red");
	});