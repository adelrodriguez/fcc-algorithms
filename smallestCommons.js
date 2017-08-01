function smallestCommons(arr) {

	arr.sort(function(a, b) {
		return a - b;
	});
	
	var smallestCommon = false;
	var result = 0;
	
	for (var i = 1; result === 0; i++) {
		for (var j = arr[0]; j <= arr[1]; j++) {
			if ((arr[1] * i) % j !== 0) {
				smallestCommon = false;
				break;
			} else {
				smallestCommon = true;
			}
		}
		
		if (smallestCommon) { 
			result = arr[1] * i;
		}
	}

	return result;
}


smallestCommons([1, 5]);