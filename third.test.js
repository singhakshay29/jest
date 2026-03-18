test('async response',async ()=>{
    await new Promise ((resolve)=>setTimeout(resolve,2000));
    expect((2+2)).toBe(4);
})

let num =[1,2,3,4];

let numbers = [[1,2,3],[2,4,6],[4,7,11]];

function add(x,y){
    return x+y;
}

test.each(num)("First test - Add 2 - %i",(value)=>{
    expect(add(2,value)).toBe(2+value);
})

test.each(numbers)('Add %i + %i ',(a,b,total)=>{
 expect(add(a,b)).toBe(total)   
})

let p = 'aaaa';
let b;

test("check truthy value",()=>{
    expect(p).toBeTruthy();
})

test('check falsy value',()=>{
    expect(b).toBeFalsy();
})