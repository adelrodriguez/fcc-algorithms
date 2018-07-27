'use strict';

function dropElements(arr, func) {
  return arr.splice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

dropElements([1, 2, 3], function (n) { return n < 3; });
