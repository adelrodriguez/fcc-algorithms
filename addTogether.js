function addTogether() {
	// check if arguments is number
	var checkNumber = function(num) {
		if (typeof num !== 'number' || isNaN(num)) {
			return undefined;
		} else
			return num;
	};
	
	if (arguments.length > 1) {
		
		var a = checkNumber(arguments[0]);
		var b = checkNumber(arguments[1]);
		var result = a + b;
		
		return checkNumber(result);
		
	} else {
		var num = arguments[0];
		
		if(checkNumber(num)) {
			return function(arg2) {
				return checkNumber(num + checkNumber(arg2));
			};
		} else   {
			return undefined;
		}
	}
}

addTogether(2, "3");