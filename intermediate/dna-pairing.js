'use strict';

function pairElement(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  };

  return str.split('').map(el => [el, pairs[el]]);
}

pairElement('GCG');
