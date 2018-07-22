'use strict';

function frankenSplice(arr1, arr2, n) {
  const copy = arr2.slice();

  arr1.forEach((e, index) => copy.splice(n + index, 0, e));

  return copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
