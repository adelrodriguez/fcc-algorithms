'use strict';

function findLongestWordLength(str) {
  let words = str.split(' ');

  words = words.sort((first, second) => second.length - first.length);

  return words[0].length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
