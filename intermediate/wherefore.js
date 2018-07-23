'use strict';

function whatIsInAName(collection, source) {
  return collection.filter(element => (
    Object.keys(source).every(key => source[key] === element[key])
  ));
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' },
);
