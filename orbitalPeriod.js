function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	var pi = 3.141592;
	var result = [];

	function Orbital(name, orbitalPeriod) {
		this.name = name;
		this.orbitalPeriod = orbitalPeriod;
	}

	arr.forEach(function(element) {
		var a = Math.round(element.avgAlt + earthRadius);
		var aCubed = Math.pow(a, 3);
		var orbitalPeriod = Math.round(2 * pi * Math.pow(aCubed / GM, 0.5));

		result.push(new Orbital(element.name, orbitalPeriod));
	});
  
	return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
