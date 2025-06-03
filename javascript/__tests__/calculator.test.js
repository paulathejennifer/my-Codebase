const add = require('../calculator');
describe('addfunction', ()=>{
    test('should return the sum of two positive numbers', ()=>{
        const num1 = 1;
        const num2 = 4;
        const result = add(num1, num2)
        expect(result).toBe(5)
    });
});