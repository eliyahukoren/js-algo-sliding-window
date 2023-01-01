const { anyName } = require("../index");

describe('Main Tests', () => {
	describe('Replace Me!', () => {
		it('Function exists', () => {
			expect(anyName).toBeDefined();
		});
	});

	describe('Unit tests', () => {
		const data = [
			[exp, given, any],
		];
		test.each(data)('anyName( %s ), should return %s',(exp, given, any) => {
			expect(anyName(given)).toEqual(exp);
		});
	});
});

