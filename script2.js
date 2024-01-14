//--------------Famous setTimeout Question--------------

//Question

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); //3, 3, 3 after every 1 sec
  }, i * 1000);
}

//solution using let

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("using let", i); //3, 3, 3 after every 1 sec
  }, i * 1000);
}

//solution using closures without using let. Here we are capturing the value of i after every iteration inside the
//function scope,  and passing it as a parameter (index) to the function inside setTimeout.

for (var i = 0; i < 3; i++) {
  (function (idx) {
    setTimeout(function () {
      console.log("using var", idx); //0, 1, 2 after every 1 sec
    }, idx * 1000);
  })(i);
}

//-----------Question: Create a private counter using closures--------
function counter() {
  let _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter value is " + _counter;
  }

  return {
    add,
    retrieve,
  };
}

let count = counter();
count.add(10);
count.add(31);
console.log(count.retrieve());

//Here we are not directly manipulating the _counter var, we are using a function.

//----------------Module pattern-------------------
//kuch samajh nahi aaya

var Module = (function () {
  function privateMethod() {
    //do something
    console.log("private method");
  }

  return {
    publicMethod: function () {
      console.log("public method");
    },
  };
})();

//Module.privateMethod(); //It will not run, as private method can't be returned
Module.publicMethod();

//---------Make the below code run once--------------

let channel;
function subscribeTheChannel() {
  channel = "Ankur's code";
  console.log(`Subscribe to ${channel}`);
}

subscribeTheChannel();
subscribeTheChannel();
subscribeTheChannel();
subscribeTheChannel();
subscribeTheChannel();

//Solution

let channel1;

function subscribeMyChannel() {
  let count = 0;
  return function () {
    if (count > 0) {
      console.log("Already subscribed");
    } else {
      channel1 = "Ankur Raj Vlogs";
      console.log(`Subscribe to ${channel1}`);
      count++;
    }
  };
}

let sub = subscribeMyChannel();
sub();
sub();
sub();
sub();

//Generic Solution

function once(func, context) {
  let ran;

  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const printHelloOnce = once((a, b) => console.log("Hellow once", a, b));

printHelloOnce(2, 3);
printHelloOnce(2, 3);
printHelloOnce(2, 3);
printHelloOnce(2, 3);

//Here, if we run this printHelloOnce many times also, it will run only once.

//-------------------Memoized polyfill----------------------------------------

//Let's create the memoized function

function myMemoize(func, context) {
  //res object would be like
  // res = {
  //    "4,5":20
  //}

  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = func.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const clumsyProduct = (num1, num2) => {
  for (let i = 1; i < 100000000; i++) {}

  return num1 * num2;
};

console.time("clumsyProduct First call");
console.log(clumsyProduct(453464545, 7654564545));
console.timeEnd("clumsyProduct First call");

console.time("clumsyProduct Second call");
console.log(clumsyProduct(4534, 7654));
console.timeEnd("clumsyProduct Second call");

const memoizedFn = myMemoize(clumsyProduct);

console.log("-----------------memoized result below---------------");

console.time("memoizedFn First call");
console.log(memoizedFn(4534, 7654));
console.timeEnd("memoizedFn First call");

console.time("memoizedFn Second call");
console.log(memoizedFn(4534, 7654));
console.timeEnd("memoizedFn Second call");
