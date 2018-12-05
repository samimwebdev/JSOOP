/*eslint-disable */

//function is object
// function person() {
//   const firstName = 'samim';
//   console.log(firstName);
// }
// person.lastName = 'Hasan';
// person.fullName = function() {
//   console.log('samim Hasan');
// };
// console.log(person.lastName);
// person.fullName();
// person();
// console.dir(person);

//'use strict';
// {
//   fullNameProto: fn();
// }

// function Person(firstName, lastName) {
//   //constructor function
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   };
//   //console.log(this);
// }
// //console.dir(Person);
// Person.prototype.fullNameProto = function() {
//   console.log(`${this.firstName} ${this.lastName} with proto`);
// };
// //console.log(Person.prototype === samim.__proto__);

// //Inheritence

// function Profession(firstName, lastName, profession) {
//   Person.call(this, firstName, lastName);
//   this.profession = profession;
// }
// Profession.prototype.fullNameProtoWithProf = function() {
//   console.log(
//     `${this.firstName} ${this.lastName} - ${this.profession} with proto`
//   );
// };
// Profession.prototype.__proto__ = Person.prototype;
// console.log(Profession.prototype.__proto__ === Person.prototype);

// console.dir(Profession);
// const samim = new Profession('samim', 'fazlu', 'Web developer');
// const khalil = new Person('Khalilur', 'Rahman');
// console.log(samim.fullName());
// console.log(samim.fullNameProtoWithProf());
// console.log(samim.fullNameProto());
// console.log(khalil.fullName());

// const myObj = {
//   firstName: 'samim'
// };

//Prototypal OO patter
// const Person = {
//   // init: function(firstName, lastName) {
//   //   this.firstName = firstName;
//   //   this.lastName = lastName;
//   //   return this;
//   // },
//   fullName: function() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
// };

// const Profession = Object.create(Person, {
//   profession: {
//     value: 'Web developer'
//   },
//   firstName: {
//     value: 'samim'
//   },
//   lastName: {
//     value: 'Hasan'
//   },
//   fullNameWithProf: {
//     value: function () {
//     }
//   }
// });
// // Profession.fullNameWithProf = function() {
// //   console.log(`${this.firstName} ${this.lastName} ${this.profession}`);
// // };

// const samim = Object.create(Profession);
// // samim.firstName = 'samim';
// // samim.lastName = 'Hasan';
// //myObj.profession = 'web developer';
// console.log(samim);
// console.log(samim.firstName);
// console.log(samim.profession);
// //Person.init('samim', 'Fazlu');

// console.log(samim.fullName());
// console.log(samim.fullNameWithProf());

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //console.log(`${firstName} ${lastName}`);
  }
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static ownProperty() {
    console.log('Own');
  }
}

class Profession extends Person {
  constructor(firstName, lastName, profession) {
    super(firstName, lastName);
    this.profession = profession;
  }

  fullNameWithProf() {
    // console.log(`${this.firstName} ${this.lastName} ${this.profession}`);
    const withProf = super.fullName();
    console.log(`${withProf} ${this.profession}`);
  }
}

const samim = new Profession('samim', 'Hasan', 'Web developer');
console.log(samim.fullName());
console.log(samim.fullNameWithProf());
console.log(Person.ownProperty());
console.log(samim);
//const khalil = new Person('Khalilur', 'Rahman');
