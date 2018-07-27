'use strict';

const Person = function Person(firstAndLast) {
  let [firstName, lastName] = firstAndLast.split(' ');

  this.getFullName = () => `${firstName} ${lastName}`;

  this.getFirstName = () => firstName;

  this.getLastName = () => lastName;

  this.setFullName = (firstAndLast) => {
    [firstName, lastName] = firstAndLast.split(' ');
  };

  this.setFirstName = (first) => {
    firstName = first;
  };

  this.setLastName = (last) => {
    lastName = last;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
