'use strict';

function translatePigLatin(str) {
  const regexp = /^[^aeiou]*/;

  if (str === str.match(regexp)[0]) return `${str}ay`;

  return str.match(regexp)[0]
    ? `${str}${str.match(regexp)[0]}ay`.replace(regexp, '')
    : `${str}way`;
}

translatePigLatin('consonant');
