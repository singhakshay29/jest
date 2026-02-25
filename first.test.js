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

test.only("third",()=>{
    console.log('third');
})
