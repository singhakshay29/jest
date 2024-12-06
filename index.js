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
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("butter"), 1000);
  });
}

//mock functions

const mockCallback = jest.fn((x) => 42 + x);

module.exports = { sum, fn, fetch, fetchPromise };
