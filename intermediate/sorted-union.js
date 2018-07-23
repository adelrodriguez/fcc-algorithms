'use strict';

function uniteUnique(arr) {
  Array.from(arguments)
    .slice(1)
    .forEach(arg => arg.forEach(el => !arr.includes(el) && arr.push(el)));

  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
