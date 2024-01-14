//!----------------------currying------------------
function f(a, b) {
  console.log((a, b));
}

function fa(a) {
  return function (b) {
    console.log(a, b);
  };
}

console.log(fa(5)(6));

//Question 1 - implement sum(2)(6)(1)

function curry(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

curry(2)(6)(1); //sum = 9

//Question 2 :

/*
evaluate("sum")(2)(4)
evaluate("subtract")(2)(4);
evaluate("multiply")(2)(4);
evaluate("divide")(2)(4);

*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      let res;
      switch (operation) {
        case "sum":
          res = a + b;
          break;
        case "subtract":
          res = a - b;
          break;
        case "multiply":
          res = a * b;
          break;
        case "divide":
          res = a / b;
          break;

        default:
          res = "invalid operation";
      }
      return res;
    };
  };
}

console.log(evaluate("multiply")(10)(5));

//?-----------------Infinite currying-----------------------------

//Infinite currying -> multiply(1)(2)(3)(4).....(n)()

function multiply(a) {
  return function (b) {
    if (b) return multiply(a * b);
    return a;
  };
}

console.log(multiply(2)(3)(4)(5)(6)());

//!-------------currying vs partial application-------------------

//The number of functions returned would be less than the arguments

function sum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

//first way of implementation

let x = sum(5);
console.log(x(6, 11));
console.log(x(16, 11));

//second way of implementation

console.log(sum(5)(6, 11));

//!-------------Question 5 - Manipulating DOM---------------------

function updateElement(id) {
  return function (content) {
    document.querySelector(`#${id}`).textContent = content;
  };
}

const updateHeader = updateElement("heading");

updateHeader("Subscribe to Ankur Code");

setTimeout(() => updateHeader("Subscribe to Ankur Vlogs"), 1000);

setTimeout(() => updateHeader("Hello Ankur"), 2000);

// !---------converting normal function to curried function------------

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum1 = (a, b, c, d) => a + b + c + d;

const totalSum = curry(sum1);

console.log(totalSum(1, 2, 3, 4));
