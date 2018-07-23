'use strict';

function sumFibs(num) {
  let a = 1;
  let b = 0;
  let sum = 0;

  while (a <= num) {
    if (a % 2 !== 0) {
      sum += a;
    }

    a += b;
    b = a - b;
  }

  return sum;
}

sumFibs(4);
