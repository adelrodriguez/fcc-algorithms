function sumPrimes(num) {
	var primes = [2];
	var isPrime;
	
	for (var i = 3; i <= num; i++) {
		for (var j = 0; j < primes.length; j++) {
			if (i % primes[j] === 0) {
				isPrime = false;
				break;
			} else {
				isPrime = true;
			}
		}
		if(isPrime) { primes.push(i); }
	}

	return primes.reduce(function(sum, value) {
		return sum + value;
	});
}

sumPrimes(977);