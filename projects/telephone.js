'use strict';

function telephoneCheck(str) {
  switch (true) {
    case str.length > 16:
      return false;
    case str.length < 10:
      return false;
    case str.match(/[^\s-\d()]/):
      return false;
    case str.length > 10 && !str.match(/[\s-]/):
      return false;
    case str.match(/\(/) && !str.match(/\)/):
      return false;
    case str.match(/\)/) && !str.match(/\(/):
      return false;
    case str.length >= 14 && !str.startsWith('1'):
      return false;
    default:
      return true;
  }
}

telephoneCheck('1 (555) 555-5555');
