function pairwise(arr, arg) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if ((arr[i] + arr[j]) === arg) {
				sum += (i + j);
				arr[j] = NaN;
				break;
			}
		}
	}

	return sum;
}

pairwise([0, 0, 0, 0, 1, 1], 1);