function permAlone(str) {

	var arr = str.split('');
	var permutations = [];
	var result = [];

	permute(arr.length);

	function swap(a, b) {
		var temp = arr[a];

		arr[a] = arr[b];
		arr[b] = temp;
	}

	function permute (n) {
		if (n === 1) {
			permutations.push(arr.join(''));
		} else {
			for (var i = 0; i < n - 1; i++) {
				permute(n - 1);
				swap(n % 2 ? 0 : i, n - 1);
			}

			permute(n - 1);
		}
	}

	permutations.forEach(function(str) {
		if(str.match(/(.)\1{1}/) === null) {
			result.push(str);
		}
	});

	return result.length;
}

permAlone("aab");