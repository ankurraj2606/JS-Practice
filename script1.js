//-------------------------------------------------Arrow function-----------------------------------------------

const add = (first, second) => {
  return first + second;
};

/**
 * !Difference b/w normal ans arrow fn.
 * 
 1. Syntax

    const add = function(first, second) {
    return first + second;
    };


    const add = (first, second) => {
    return first + second;
    };

2. implicit return keyword

    const square = (num)=> num*num;

3. Arguments

    we have access to arguments in normal function but not the arrow function.

4.this keyword

 */

function fn() {
  console.log(arguments); //returns an array of arguments : [1,2,3,4,5,6]
}

fn(1, 2, 3, 4, 5, 6);

//const myFn = () => console.log(arguments); //error : arguments is not defined.
//myFn(1, 2, 4, 5);

let username = "Rahul Pal";

let user = {
  username: "Ankur Raj",
  fn1: () => console.log("Subscribe to " + this.username),
  fn2: function () {
    console.log("Subscribe to " + this.username);
  },
};

user.fn1(); //Subscribe to undefined
user.fn2(); //Subscribe to Ankur Raj

//Arrow functions, on the other hand, do not have their own this. Instead, they inherit the this value from
//the enclosing lexical scope (the scope where the arrow function is defined).

//---------------------------------------------Closures---------------------------------------------------------------
// A function and the lexical environment within which, the function is declared, forms a closure.
// closure allows a function to access variables from its outer (enclosing) scope even after the outer
// function has finished executing. Simply, function can access variables from it's lexical environment.
// But the vice-versa is not true.

//global scope

var userName = "Ankur Raj";

function print() {
  //local scope
  console.log(userName);
}
print();

//global scope
function subscribe() {
  //outer function scope
  var number = 24;
  function displayName() {
    //local scope
    var name = "Ankur";
    console.log(name, number, userName);
  }
  displayName();
}

subscribe();

//scope chaining

let e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d + e;
      };
    };
  };
}

//1st method of invoking scope chain functions

const sum1 = sum(2);
const sum2 = sum1(3);
const sum3 = sum2(4);
const result = sum3(5);
console.log(result);

//Another way of invoking scope chain functions: shorter way

console.log(sum(2)(3)(4)(5));

//Question 1

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //variable shadowing
    console.log(count); //1
  }
  console.log(count); //0
})();

//Question 2

function createBase(n) {
  //Here the outer function will act as a base function,and once we initialized n with 6,
  //here, it will always be constant,6
  return function (num) {
    console.log(n + num);
  };
}

var addSix = createBase(6); //Here we are initializing outer fn with 6, it will always be 6, and we'll be invoking
//inner fn, with new values each time
addSix(10); //16
addSix(21); //27

//Question 3 - Time optimization : optimize the below code

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}

console.time("6");
find(6);
console.timeEnd("6");

console.time("12");
find(12);
console.timeEnd("12");

//optimized code with the help of closure

function optimizedFind() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const opt = optimizedFind();

console.time("6");
opt(6);
console.timeEnd("6");

console.time("50");
opt(50);
console.timeEnd("50");
