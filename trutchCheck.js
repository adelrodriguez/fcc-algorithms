function truthCheck(collection, pre) {
	// Is everyone being true?
	var answer = true;
  
	collection.forEach(function(element) {
		if (!element[pre]) { answer = false; }
	});

	return answer;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");