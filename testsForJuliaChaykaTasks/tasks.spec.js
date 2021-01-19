const {isPerfect, sum, quantity} = require('./tasks');

//Tests for quantity

describe('check quantity function', () => {

    test('should  10 length to be equal 2', () => {
        expect(quantity(10)).toBe(2)
    });

    test('should 35 length not to be equal 0', () => {
        expect(quantity(35)).not.toBe(0)
    });

    test('should 13 length not to be undefined', () => {
        expect(quantity(13)).not.toBeUndefined()
    });

    test('should 100 length not to be null', () => {
        expect(quantity(100)).not.toBeNaN()
    });

    test('should 80 length not to be null', () => {
        expect(quantity(80)).toBeTruthy()
    });


});

//Tests for sum

describe('Sum function', () => {

    test('should return a number', () => {
        expect(sum(20)).not.toBeNaN()
    });

    test('should be true', () => {
        expect(sum(50)).toBeTruthy()
    });

    test('should not to be null', () => {
        expect(sum(12)).not.toBeNull()
    });

    test('should be defined', () => {
        expect(sum(12)).toBeDefined()
    });

    test('should return false value', () => {
        expect(sum(0)).toBeFalsy()
    });

    test('should be equal 2', () => {
        expect(sum(12)).toBe(3)
    });
});

//Tests for isPerfect

describe('IsPerfect function', () => {

    test('should be true', () => {
        expect(isPerfect(6)).toBeTruthy()
    });

    test('should be false', () => {
        expect(isPerfect(5)).toBeFalsy()
    });

    test('should not be NaN', () => {
        expect(isPerfect(5)).not.toBeNaN()
    });

    test('should be defined', () => {
        expect(isPerfect(5)).toBeDefined()
    });

    test('should not be null', () => {
        expect(isPerfect(5)).not.toBeNull()
    });

});
