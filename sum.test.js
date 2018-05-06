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
	expect(functions.checkValue(null)).toBeFalsy();
});

test('should be Maria Lobillo object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Maria',
		lastName: 'Lobillo'
	});
});

// less than and greater than
test('should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

// Arrays
test('Admin should be in usernames', () => {
	usernames = ['jhon', 'karen', 'admin'];
	expect(usernames).toContain('admin')
});

// Working with async data
test('User fetched name should be Leanne Graham', () => {
	expect.assertions(1);
	return functions.fetchUser()
		.then(data => {
			expect(data.name).toEqual('Leanne Graham');
		});
})
