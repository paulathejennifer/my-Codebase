// const { describe } = require('yargs')
const isValid = require('./boundaries')


describe('Password validation', ()=> {
    test('should return true for a valid password', ()=>{
        const password = 'Abc12345!';
        expect(isValid(password)).toBe(true)
    });

    test('should return false for a password without a letter', ()=>{
        const password = '12434!'
        expect(isValid(password)).toBe(false)
    });

    test('should return false for a password without a number', ()=>{
        const password = 'Abcrf!'
        expect(isValid(password)).toBe(false)
    });

    test('should return false for a password without special character',()=>{
        const password = 'Abc2'
        expect(isValid(password)).toBe(false)
    });
})


