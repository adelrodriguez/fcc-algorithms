'use strict';

function bouncer(arr) {
  return arr.filter(elem => !!elem);
}

bouncer([7, 'ate', '', false, 9]);
