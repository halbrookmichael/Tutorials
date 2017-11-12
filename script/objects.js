// Object array creation 

var movies = [
    {
	 title: "Tombstone",
	 hasWatched: true,
	 rating: 5
    },
    {
	 title: "Star Wars",
	 hasWatched: false,
	 rating: 4
    }
];

// forEach used to print out movie array as a readable string
movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result);
});

// refactor string build

function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	}else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result
};

// Prints out string

movies.forEach (function(movie){
	console.log(buildString(movie));
});