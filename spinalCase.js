function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins
	function replaceCamel (match) {
		var arr = match.split('');
		arr.splice(1, 0, '-');
		return arr.join('');
	}
	
	function toLowerCase (match) {
		return match.toLowerCase();
	}
	
	str = str.replace(/[\s\_]/g, '-').replace(/([a-z][A-Z])/g, replaceCamel);
	str = str.replace(/[A-Z]/g, toLowerCase);
	
	return str;
}