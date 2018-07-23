'use strict';

function palindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    switch (true) {
      case !!str[start].match(/[^A-Za-z0-9]/):
        start++;
        break;
      case !!str[end].match(/[^A-Za-z0-9]/):
        end--;
        break;
      case str[start].toLowerCase() !== str[end].toLowerCase():
        return false;
      default:
        start++;
        end--;
    }
  }

  return true;
}

palindrome('eye');
