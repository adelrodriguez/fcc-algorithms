'use strict';

function rot13(str) {
  return str
    .split(' ')
    .map(word => word
      .split('')
      .map((letter) => {
        const code = letter.charCodeAt(0);
        return String.fromCharCode(code < 65 || code > 90 ? code : (code % 26) + 65);
      })
      .join(''))
    .join(' ');
}

rot13('SERR PBQR PNZC');
