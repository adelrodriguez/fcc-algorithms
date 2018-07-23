'use strict';

function sumPrimes(num) {
  const primes = [2];
  let isPrime = true;

  for (let i = 3; i <= num; i++) {
    for (let j = 0; j < primes.length; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
    isPrime = true;
  }

  return primes.reduce((sum, value) => sum + value);
}

sumPrimes(977);
