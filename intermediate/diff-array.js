'use strict';

function diffArray(arr1, arr2) {
  return [...arr1, ...arr2].filter((el, i, arr) => arr.indexOf(el) === arr.lastIndexOf(el));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
