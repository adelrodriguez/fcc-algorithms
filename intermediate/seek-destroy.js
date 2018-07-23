'use strict';

function destroyer(arr) {
  const args = Array.from(arguments).slice(1);

  return arr.filter(el => !args.includes(el));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
