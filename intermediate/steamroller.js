'use strict';

function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')
    .split(',')
    .map((el) => {
      if (el === '[object Object]') return {};
      if (Number(el)) return +el;
      return el;
    });
}

steamrollArray([1, [2], [3, [[4]]]]);
