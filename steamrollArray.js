function steamrollArray(arr) {
	var result = [];
  
	arr.forEach(function(element) {
		if(Array.isArray(element)) {
			result = result.concat(steamrollArray(element));
		} else {
			result.push(element);
		}
	});

	return result;
}

steamrollArray([1, [2], [3, [[4]]]]);