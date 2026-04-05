const obj = require("./index");

let user=[];
beforeAll(()=>{
    console.log('befor all');
    user=[];
})

test("should add user",()=>{
    user.push("ajay");
    expect(user).toContain("ajay");
})

test("should be updated",()=>{
    expect(user.length).toBe(1);
})


test("first",()=>{
    user.push("akshay");
    expect(user).toContain("ajay");
})

test.skip("second",()=>{
    console.log('second');
})

test("third",()=>{
    console.log('third');
})

//example of mock function

const square= jest.fn();
describe('Should test Square file',()=>{
    
    //method One by importing
    //test('Test X function',()=>{
    //    const sq= x(3);
    //    expect(sq).toBe(9);
    //})
    
    
    //Second Method
      test('Test Square function using Mock',()=>{
       square.mockImplementation((value)=>value*value);
       const result=square(5);
       expect(result).toBe(25);
    })
    test('Test X function using Spy',()=>{
        const spy = jest.spyOn(obj, "x");
       spy.mockImplementation((value)=>value*value);
        const result=obj.x(5);;
        expect(result).toBe(25);
        spy.mockRestore();
     })
})

