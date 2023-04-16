"use strict";
console.log("hey there");

// CONSTRUCTOR FUNCTIONS!!
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const monkey = function (firstName, monkeyname) {
  this.firstName = firstName;
  this.monkeyname = monkeyname;
};

const jonas = new Person("Shaik", 1991);

Person.hey = function () {
  console.log("hey there");
  console.log(this);
};

Person.hey();
*/
// console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} is linked to a prototype
// 4. function automatically returns {}

/*
const sreya = new monkey("Sreya", "dumbass_baby");
const yousuf = new Person("yousuf", 2004);
console.log(sreya instanceof monkey); // Printing
console.log(yousuf instanceof Person);
*/

// PROTOTYPE;

// console.log(Person.prototype);
/*
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

Person.prototype.species = "Homo Sapiens";
monkey.prototype.species = "monkey";

yousuf.calcAge();
console.log(yousuf, sreya);
console.log(yousuf.species);
console.log(sreya.species);
console.log(yousuf.__proto__ === Person.prototype);
*/
/*
const arr = [3, 4, 5, 4, 3, 2, 6, 7];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
const uniqArr = arr.unique();
console.log(uniqArr);
*/

// CHALLENGE
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  return (this.speed += 10);
};

Car.prototype.brake = function () {
  return (this.speed -= 5);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("MERCEDES", 80);

console.log(bmw.accelerate());
console.log(bmw.brake());
*/
/*
const CarClProto = {
  init(make, speed) {
    this.make = make;
    this.speed = speed;
  },

  accelerate() {
    return (this.speed += 10);
  },
  brake() {
    return (this.speed -= 5);
  },

  get speedUs() {
    return this.speed / 1.6;
  },

  set speedUs(curSpeed) {
    return (this.speed = curSpeed * 1.6);
  },
};

const ford = Object.create(CarClProto);

ford.init("ford Mustang", 120);

ford.accelerate();
console.log(ford.accelerate());

ford.speedUs = 200;

console.log(ford);
*/

// ES6 CLASSES

// class expression
// const PersonCl = class {};

// class declaration and setter and getters
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //   Methods will be added to the .prototype property

  // Instance methods
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static methods

  static hey() {
    console.log("hey there");
    console.log(this);
  }
}
*/

/*
const sreya = new PersonCl("Sreya Devulapalli", 2003);
console.log(sreya.age);
console.log(sreya);
sreya.calcAge();

const yousuf = new PersonCl("yousuf adnan", 2004);

// yousuf.name = "shaik yousuf";

// console.log(yousuf);

console.log(sreya.__proto__ == PersonCl.prototype);
*/

/*
PersonCl.prototype.greet = function () {
  console.log(`hey ${this._fullName}, I loffff youuuu`);
};

sreya.greet();

// GETTERS AND SETTERS

const account = {
  owner: "jonas",
  movements: [200, 150, 250, 600, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 200;

console.log(account.movements);
PersonCl.hey();
*/

// OBJECT.CREATE()
/*
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
  calcAge() {
    console.log(2025 - this.birthYear);
  },
};

const steve = Object.create(PersonProto);

console.log(steve);
steve.init("steve", 2002);
steve.calcAge();

const selva = Object.create(PersonProto);

selva.init("selva", 1990);
console.log(selva);
*/

// Prototype chaining with classes

/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(
    `Student name: ${this.firstName}, born in: ${this.birthYear}, pursuing: ${this.course}`
  );
};

const sreya = new Student("Sreya", 2003, "B.Tech");

sreya.intro();
sreya.calcAge();
*/

// More classes

// Data Encapsulation and privacy!!

// Public fields
// Private fields
// Public methods
// Private methods
/*

class Account {
  // Public field
  locale = navigator.language;
  _movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening and account`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approvedLoan(val) {
    return true;
  }

  // requestLoan(val)
}

const acc1 = new Account("Sreya", "USD", 1111, []);
console.log(acc1);
*/

// Asynchronous JS

// AJAX Call method
// Asynchronous js and XML

const renderCountry = function(country) {
  
    const html = `
  <article class="country">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      data.population / 1000000
    ).toFixed(1)}e</p>
    <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)[0]}</p>
    <p class="country__row"><span>💰</span>${
      Object.keys(data.currencies)[0]
    }</p>
  </div>
</article> 
  `;
}


const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  console.log(request.responseText);

  request.addEventListener("load", function () {
    // console.log(this.responseText)

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const {dataCur} = data.currencies;   

    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryAndNeighbour('canada')
getCountryAndNeighbour('usa')
getCountryAndNeighbour('india')

// const languages = 
// {eng: 'English', fra: 'French'}
// console.log(Object.keys(languages)[0])
