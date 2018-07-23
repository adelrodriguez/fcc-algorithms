'use strict';

function fearNotLetter(str) {
  for (let i = 0, j = str.charCodeAt(0); i < str.length; i++, j++) {
    if (j !== str.charCodeAt(i)) {
      return String.fromCharCode(j);
    }
  }

  return undefined;
}

fearNotLetter('abce');
