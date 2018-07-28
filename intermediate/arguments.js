'use strict';

function addTogether() {
  const [a, b] = Array.from(arguments);

  if (typeof a === 'number') {
    if (typeof b === 'number') {
      return a + b;
    }

    if (typeof b === 'undefined') {
      return function add(num) {
        if (typeof num === 'number') {
          return num + a;
        }

        return undefined;
      };
    }
  }

  return undefined;
}

addTogether(2, 3);
