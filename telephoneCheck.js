function telephoneCheck(str) {
	// Good luck!
	switch(true) {
		case str.length > 16: 
			return false;
		case str.length < 10:
			return false;
		case str.search(/[^\s\-\d\(\)]/) !== -1:
			return false;
		case str.length > 10 && str.search(/[\s\-]/) === -1:
			return false;
		case str.search(/\(/) !== -1 && str.search(/\)/) === -1:
			return false;
		case str.search(/\(/) === -1 && str.search(/\)/) !== -1:
			return false;
		case str.length >= 14 && str.indexOf('1 ') === -1 && str.indexOf('1(') === -1:
			return false;
	}

	return true;
}



telephoneCheck("1 (555) 555-5555");
