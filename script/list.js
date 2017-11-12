var todos = [];

var input = prompt("Enter NEW to add an item, enter LIST to see items, DELETE to remove an item or enter QUIT to leave app.");

while(input !== "quit"){
	// handle input
	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		addTodo();
	}else if(input === "delete") {
		deleteTodo();
	}
	// ask again for new input
	input = prompt("What would you like to do?");
}

console.log("Okay you quit the app.");

// functions

function listTodos() {
	console.log("--------");
	todos.forEach(function(todo, index){
		console.log(index + ":" + todo);
	});
	console.log("--------");
}

function addTodo() {
	// ask for new todo
	var newTodo = prompt("Enter new todo");
	// add to todos array
	todos.push(newTodo);
	console.log("Added Todo!");
}

function deleteTodo() {
	// ask for index of todo to be deleted
	var x = prompt("Which index do you want to delete?");
	// delete that todo
	todos.splice(x, 1);
	// feedback
	console.log(x + " was deleted.");
}