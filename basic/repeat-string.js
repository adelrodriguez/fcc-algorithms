'use strict';

function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';

  return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes('abc', 3);
