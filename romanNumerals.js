function convertToRoman(num) {
	var numeral = "";
	// object sorted with keys being the letters due to the browser
	// organizing insertion order by ascending if using numbers as keys

   var numerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};

	for (var i in numerals) {
  		while (num >= numerals[i]) {
  			numeral += i;
  			num -= numerals[i];
  		}
  	}

	return numeral;
}

convertToRoman(36);