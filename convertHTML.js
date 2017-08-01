function convertHTML(str) {
	var entities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&apos;'
	};

	for (var char in entities) {
		var find = new RegExp(char, 'g');
		str = str.replace(find, entities[char]);
	}
	
	return str;
}

convertHTML('Stuff in "quotation marks"');
