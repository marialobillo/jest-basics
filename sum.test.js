const functions = require('./sum');

test('add 1 + 2 to equal 3', () => {
	expect(functions.sum(1, 2)).toBe(3);
});

test('Add 2 + 2 to NOT equal 5', () => {
	expect(functions.sum(2, 2)).not.toBe(5);
});

test('Add 2 numbers', () => {
	expect(functions.sum(1, 2)).not.toBeNull();
});

test('should be null', () => {
	expect(functions.isNull()).toBeNull();
});

test('should be falsy', () => {
	expect(functions.checkValue(null).toBeFalsy());
});
