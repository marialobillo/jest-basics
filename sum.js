
const functions = {
	sum : (a, b) => a + b,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = {
			firstName: 'Maria',
			lastName: 'Lobillo'
		};
		return user;
	}
};

module.exports = functions;
