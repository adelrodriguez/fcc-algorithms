'use strict';

function mutation(arr) {
  const target = arr[0].toLowerCase();
  const test = arr[1].toLowerCase();

  return test.split('').every(letter => target.includes(letter));
}

mutation(['hello', 'hey']);
