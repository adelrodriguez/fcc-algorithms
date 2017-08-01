function sym(args) {
	var arr = Array.from(arguments);
	
	var cleanDuplicates = function(dupArr) {
		return dupArr.filter(function(item, pos, self) {
			return self.indexOf(item) == pos;
		});
	};
	
	var result = arr.reduce(function(a, b) {
		
		b = cleanDuplicates(b);
		
		for (var i = a.length - 1; i >= 0; i--) {
			if (b.indexOf(a[i]) !== -1) {
				b.splice(b.indexOf(a[i]), 1);
				a.splice(i, 1);
			}
		}

		return a.concat(b);
	}, []);
	
	return result;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);