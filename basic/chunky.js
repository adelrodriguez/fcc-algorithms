'use strict';

function chunkArrayInGroups(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
