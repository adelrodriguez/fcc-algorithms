'use strict';

function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);

  if (num > sorted[sorted.length - 1] || !sorted.length) return sorted.length;

  sorted.pop();

  return getIndexToIns(sorted, num);
}

getIndexToIns([40, 60], 50);
