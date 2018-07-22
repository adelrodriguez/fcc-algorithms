'use strict';

function titleCase(str) {
  return str
    .split(' ')
    .map(word => word.toLowerCase().replace(/^\w/, a => a.toUpperCase()))
    .join(' ');
}

titleCase("I'm a little tea pot");
