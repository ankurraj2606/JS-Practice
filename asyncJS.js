//! callback hell-----------------setTimeout-----------------------

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holer: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

/*

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};
let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log("fruits has been chopped");

      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]}  has been added`
        );
        setTimeout(() => {
          console.log("The machine has been started");
          setTimeout(() => {
            console.log(`Ice cream has been placed on the ${stocks.holer[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} has been added as topping.`);
              setTimeout(() => {
                console.log("Ice cream has been served");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);

*/

//!---------------Promises-------------------------------------------------------

let is_shop_open = false;

/*
! Promise function


let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time * 1000);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

?Promise Implementation

order(2, () => console.log(`${stocks.Fruits[1]} has been selected`))
  .then(2, () => {
    return order(0, () => console.log("Production has been started"));
  })
  .then(() => {
    return order(2, () => console.log("fruits has been chopped"));
  })
  .then(() => {
    return order(1, () =>
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`)
    );
  })
  .then(() => {
    return order(1, () => console.log("Machine has been started"));
  })
  .then(() => {
    return order(2, () =>
      console.log(`Ice cream has been added on the ${stocks.holer[0]}`)
    );
  })
  .then(() => {
    return order(3, () =>
      console.log(`${stocks.toppings[0]} has been added as a topping`)
    );
  })
  .then(() => {
    return order(1, () => console.log("Ice cream has been served"));
  })
  .catch(() => console.log("customer has left"))
  .finally(() => {
    console.log("Day ended. Shop is closed now!");
  });

*/

/*

!Practice promise

let ourOrder = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve(work)
        }else{
            reject(console.log("Error"))
        }
    })
}

order()
.then()
.then()
.catch() //when promise has been rejected
.finally()//will run whether promise has been resolved or rejected

*/

//?-------------Async/Await-------------------------

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("The shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} has been selected`);

    await time(0);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been added`);

    await time(1000);
    console.log("start the machine");

    await time(2000);
    console.log(`Ice cream has been poured on the ${stocks.holer[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} has been added on the ice cream`);

    await time(1000);
    console.log("Ice cream has been serve.");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day done! shop closed");
  }
}

kitchen();
