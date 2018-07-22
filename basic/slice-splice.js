'use strict';

function frankenSplice(arr1, arr2, n) {
  const copy = arr2.slice();

  copy.splice(n, 0, ...arr1);

  return copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
