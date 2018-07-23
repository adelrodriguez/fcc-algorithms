'use strict';

function myReplace(str, before, after) {
  return str.replace(
    before,
    /^[A-Z]/.test(before) ? after.replace(/^[a-z]/, match => match.toUpperCase()) : after,
  );
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
