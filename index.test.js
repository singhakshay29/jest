const { sum, fn, fetch, fetchPromise } = require("./index");

describe("will test number cases", () => {
  //test('description',testfunction)
  test("adds 1+2 to equals to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  //Common Matchers
  test("two plus two give four", () => {
    expect(2 + 2).toBe(4);
  });
});

//beforeEach(()=>{
//  console.log('will run before every text case')
//})

//afterEach(()=>{
//  console.log("will run after every test case")
//})

//beforeAll(()=>{
//  console.log("will run once first time after that test case run")
//})

//afterAll(()=>{
//  console.log("will run once after all test cases executed")
//})

test("object assignments", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

//Truthiness And Falsy

test("null is falsy", () => {
  const no = null;
  expect(no).toBeFalsy();
});

test("Zero is falsy", () => {
  const no = 0;
  expect(no).toBeFalsy();
});

test("One is truthy", () => {
  const no = 1;
  expect(no).toBeTruthy();
});

test("throw on invalid input", () => {
  expect(() => {
    fn("ewincs");
  }).toThrow();
});

test("data is butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("butter");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetch(callback);
});

test("data is butter", () => {
  return expect(fetchPromise()).resolves.toBe("butter");
});

// test("data is not butter", () => {
//   return expect(fetchPromise()).rejects.toThrow("error");
// });

test("data is butter", async () => {
  const data = await fetchPromise();
  expect(data).toBe("butter");
});

test("mock implementations", () => {
  const mock = jest.fn((x) => 42 + x);
  expect(mock(1)).toBe(43);
});

test("spying on a method of an object", () => {
  const video = {
    play() {
      return true;
    },
  };
  const spy = jest.spyOn(video, "play");
  video.play();
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
