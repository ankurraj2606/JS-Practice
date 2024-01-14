//function declarations

function square(num) {
  return num * num;
}

//function expression - anonymous function assigned to a variable is a function expression

const square1 = function (num) {
  return num * num;
};

console.log(square1(5));

//First-class functions : In a language where functions can be treated as variables , their
//functions are called first class functions. in this cases, functions can be passed inside
//another functions, can be treated, modified and returned from a function

function displaySquare(fn, n) {
  return fn(n);
}

console.log("Running square inside displaySquare fn, result is " + square(5));

//IIFE - Immediately invoked function expression : The function would get invoked immediately, as we define it.
//we don't need to explicitly call it.

(function add(m, n) {
  console.log(m + n);
})(45, 345);

(function (x) {
  return (function (y) {
    console.log(x + y, x, y);
  })(4);
})(5);

//setTimeout with loop

//Here let will create a new block everytime this loop would run, so the value will increment everytime the loop runs.

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2, 3, 4   (each after 1 sec)
  }, 1000);
}

//Function Hoisting - Functions are hoisted completely in JS. So, either we run a fn. after declaring or before
//declaring, it doesn't really matter.

run(5);

function run(x) {
  console.log("function running....", x);
}

//Function Hoisting - O/P based question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); //output - undefined. Since, x is already present in the local scope, so we are not gonna check the
//global scope. And since local x is not initialized yet, so it will print undefined here.

console.log(x); //21 - This console will take the x present in the global scope

//Parameters vs Arguments

function addNum(x, y, z) {
  // Here, x,y and z are parameters
  console.log(x + y + z);
}

addNum(5, 6, 21); //Arguments (5, 6, 11)

//Parameters are always received by the fn. while declaring it, and arguments are passed at the time of calling it.

//Spread vs rest operator

function multiply(...nums) {
  //rest operator (nums)
  console.log(nums[0] * nums[1] * nums[2]);
}

var arr1 = [2, 8, 9];

multiply(...arr1); //spread operator(arr1)

//Rest vs Spread - O/P based question

const fn = (x, b, c, ...nums) => {
  console.log(x, b, c, nums);
};

fn(5, 6, 8, 2, 3, 4, 5); //o/p - 5 6 8 [2, 3, 4, 5]

//Callback functions - A callback function is a function passed into another function as an argument,which is
//then invoked inside the outer function to complete some kind of action.

setTimeout(function () {
  //Here function is getting called inside the setTimeout fn. So, This is a callback fn.
  console.log("This is the callback fn inside setTimeout");
}, 1 * 1000);

function book() {
  return function () {
    console.log("logging from callback fn., book");
  };
}
const bk = book();
bk(); //One way of calling the return fn

book()(); //Another way of calling the return fn.

//Here this inner function being returned by the outer fn is the callback.

//Another example of callback fn
function notMain() {
  console.log("Not main");
}

function main(fn) {
  return fn;
}

const fnToInvoke = main(notMain);
fnToInvoke();

//whenever we return a function from another fn, we need to assign
//to another variable and invoke that.
