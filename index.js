function sum(a, b) {
  return a + b;
}

function fn(n) {
  if (typeof n !== "number") {
    throw new Error("Invalid Input");
  }
  return n * n;
}

function fetch(callback) {
  setTimeout(() => {
    callback("butter");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("butter"), 1000);
  });
}
function x(value){
  return value*value;
}

//mock functions

// const mockCallback = jest.fn((x) => 42 + x);

module.exports = { sum, fn, fetch, fetchPromise,x };

//jest.fn() (Mock function)
//• Creates a standalone fake function. 
//• Not linked to any real module or object. 
//• You decide its behaviour using mockReturn Value, mockImplementation, etc. 
//• Purely for testing when you don't have (or don't want to use) a real function.

//jest.spyOn(obj, methodName) (Spy) 

//• A spy is basically a wrapper around an existing function 
//• Attaches to an existing function inside an object or module. 
//• Let's you track calls: how many times it was called, with what arguments. 
//• You can override its behavior temporarily using mockReturn Vali or mockImplementation

//Mock (jest.fn) → brand new fake function. 
//Spy (iest.spyOn) - monitor or temporarily change a real