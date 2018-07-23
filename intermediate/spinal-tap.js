'use strict';

function spinalCase(str) {
  return str.split(/_|\s|(?=[A-Z])/g).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
