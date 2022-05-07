const a = 7;
const b = 3;

const myName = "Martin";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("hello " + myName);

const toBuy = ["milk", "bread", "eggs", "cheese"];
console.log(toBuy);
console.log(toBuy[3]);

const player = {
  name: "Martin",
  points: 100,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "Kováč";
console.log(player);
player.points = player.points + 10;
console.log(player);

function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Martin");

const player2 = {
  name: "Martin",
  sayHello: function (otherName) {
    console.log("Hello " + otherName + " nice to meet you");
  },
};

player2.sayHello("alba");

//always use const, somtimes use let
const aaa = 5;
//aaa = 6;  //error
let isNicoFat = true;
isNicFat = false;

//null and undefined
//null is a value, undefined is a variable

const me = "sexy";
const days = [1, 2, 3, null, undefined, "str", me];

days.push("meat"); //put in the end

const player3 = {
  name: "Martin",
  age: 10,
};

// console.log(player3, console);
// console.log((player3.name = "Martin Kováč"));
// add property
player3.good = true;
console.log(player3);

//function
function plus(a, b) {
  console.log(a + b);
}

plus(3, 8);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

calculator.times(4, 7);
console.log(calculator.plus(1, 2)); //undefined

const plusResult = calculator.plus(1, 2);
const minusResult = calculator.minus(plusResult, 2);
const timesResult = calculator.times(minusResult, 10);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

// return
const age = 99;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
